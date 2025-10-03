import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DatePipe } from '@angular/common';
import { EmployeService } from '../../Service/employe-service';
import { Employe } from '../../Models/Employe.models';
import { Page } from '../../Models/pages.models';

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
    size: 0,
    number: 8,
    first: true,
    last: true,
    numberOfElements: 0,
    empty: true,
  };

  constructor(private employeService: EmployeService) {}
  ngOnInit(): void {
    this.employeService
      .getAllEmployes(this.employePage.size, this.employePage.number)
      .subscribe((data) => {
        this.employePage = data;
        this.employe = data.content;
      });
  }
  addEmploye() {
    throw new Error('Method not implemented.');
  }
  deleteEmploye(arg0: any) {
    throw new Error('Method not implemented.');
  }
  editEmploye(_t14: any) {
    throw new Error('Method not implemented.');
  }
}
