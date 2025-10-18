import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faBoxesPacking,
  faHouse,
  faSearch,
  faSignOut,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  standalone: true,
})
export class NavBar {
  faHouse = faHouse;
  faUsers = faUsers;
  faProductHunt = faProductHunt;
  faBoxesPacking = faBoxesPacking;
  faSignOut = faSignOut;
  faSearch = faSearch;
}
