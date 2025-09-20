import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gest-fournissuer',
  imports: [NavBar, FontAwesomeModule, DatePipe],
  templateUrl: './gest-fournissuer.html',
  styleUrl: './gest-fournissuer.css',
})
export class GestFournissuer {
  fournisseur: any;
  faSearch = faSearch;
  faSignOut = faSignOut;
  faAdd = faAdd;
}
