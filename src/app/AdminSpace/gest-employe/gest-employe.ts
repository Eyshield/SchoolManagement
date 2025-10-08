import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';
import { EmployeService } from '../../Service/employe-service';
import { Employe } from '../../Models/Employe.models';
import { Page } from '../../Models/pages.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gest-employe',
  imports: [NavBar, FontAwesomeModule, DatePipe],
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

  constructor(private employeService: EmployeService, private router: Router) {}
  ngOnInit(): void {
    this.employeService
      .getAllEmployes(this.employePage.size, this.employePage.number)
      .subscribe((data) => {
        this.employePage = data;
        this.employe = data.content;
      });
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
}
