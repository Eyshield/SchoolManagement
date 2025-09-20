import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gest-produit',
  imports: [NavBar, FontAwesomeModule],
  templateUrl: './gest-produit.html',
  styleUrl: './gest-produit.css',
})
export class GestProduit {
  produit: any;
  faSearch = faSearch;
  faSignOut = faSignOut;
  faAdd = faAdd;
}
