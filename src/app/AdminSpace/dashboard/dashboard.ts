import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';

@Component({
  selector: 'app-dashboard',
  imports: [NavBar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard {}
