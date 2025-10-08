import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-fournisseur',
  imports: [NavBar, FontAwesomeModule],
  templateUrl: './add-fournisseur.html',
  styleUrl: './add-fournisseur.css',
})
export class AddFournisseur {
  faSignOut = faSignOut;
}
