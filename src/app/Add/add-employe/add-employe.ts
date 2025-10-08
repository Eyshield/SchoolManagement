import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-employe',
  imports: [NavBar, FontAwesomeModule],
  templateUrl: './add-employe.html',
  styleUrl: './add-employe.css',
  standalone: true,
})
export class AddEmploye {
  faSignOut = faSignOut;
}
