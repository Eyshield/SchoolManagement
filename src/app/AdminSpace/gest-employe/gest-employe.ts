import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-gest-employe',
  imports: [NavBar, FontAwesomeModule],
  templateUrl: './gest-employe.html',
  styleUrl: './gest-employe.css',
})
export class GestEmploye {
  faSignOut = faSignOut;
  faSearch = faSearch;
  employe: any;
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
