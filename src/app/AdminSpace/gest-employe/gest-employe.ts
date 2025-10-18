import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';
import { EmployeService } from '../../Service/employe-service';
import { Employe } from '../../Models/Employe.models';
import { Page } from '../../Models/pages.models';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-gest-employe',
  imports: [NavBar, FontAwesomeModule, DatePipe, ReactiveFormsModule],
  templateUrl: './gest-employe.html',
  styleUrl: './gest-employe.css',
})
export class GestEmploye implements OnInit {
  faSignOut = faSignOut;
  faSearch = faSearch;
  employe: Employe[] = [];
  employePage: Page<Employe> = {
    content: [],
    totalElements: 0,
    totalPages: 0,
    size: 8,
    number: 0,
    first: true,
    last: true,
    numberOfElements: 0,
    empty: true,
  };

  searchTerm = new FormControl('');

  constructor(
    private employeService: EmployeService,
    private router: Router,
    private authservice: Auth
  ) {}
  ngOnInit(): void {
    this.loadEmployes();
  }
  loadEmployes() {
    if (this.searchTerm.value && this.searchTerm.value !== '') {
      this.employeService
        .searchEmployes(this.searchTerm!.value)
        .subscribe((data) => {
          this.employe = data.content;
          this.employePage = data;
        });
    } else {
      this.employeService
        .getAllEmployes(this.employePage.size, this.employePage.number)
        .subscribe((data) => {
          this.employePage = data;
          this.employe = data.content;
        });
    }
  }
  nextPage() {
    if (this.employePage.number < this.employePage.totalPages - 1) {
      this.employePage.number++;
      this.loadEmployes();
    }
  }

  prevPage() {
    if (this.employePage.number > 0) {
      this.employePage.number--;
      this.loadEmployes();
    }
  }

  navigateToAddEmployee() {
    this.router.navigate(['/Add-employe']);
  }
  deleteEmployee(id: number) {
    this.employeService.deleteEmploye(id).subscribe(() => {});
  }
  navigateToEditEmployee(id: number) {
    this.router.navigate([`/edit-employe/${id}`]);
  }
  logout() {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
