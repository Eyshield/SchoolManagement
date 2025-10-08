import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-produit',
  imports: [NavBar, FontAwesomeModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css',
})
export class AddProduit {
  faSignOut = faSignOut;
}
