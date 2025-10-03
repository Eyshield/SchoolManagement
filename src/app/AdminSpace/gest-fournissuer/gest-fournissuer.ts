import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import { FournissuerService } from '../../Service/fournissuer-service';
import { Fournisseur } from '../../Models/Fournisseurs.models';
import { Page } from '../../Models/pages.models';

@Component({
  selector: 'app-gest-fournissuer',
  imports: [NavBar, FontAwesomeModule, DatePipe],
  templateUrl: './gest-fournissuer.html',
  styleUrl: './gest-fournissuer.css',
})
export class GestFournissuer implements OnInit {
  fournisseur: Fournisseur[] = [];
  founissuerPage: Page<Fournisseur> = {
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
  faSearch = faSearch;
  faSignOut = faSignOut;
  faAdd = faAdd;
  constructor(private fournisseurService: FournissuerService) {}
  ngOnInit(): void {
    this.fournisseurService
      .getAllFournisseurs(this.founissuerPage.size, this.founissuerPage.number)
      .subscribe((data) => {
        this.founissuerPage = data;
        this.fournisseur = data.content;
      });
  }
}
