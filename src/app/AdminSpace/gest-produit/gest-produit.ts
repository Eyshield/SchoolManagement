import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Page } from '../../Models/pages.models';
import { Produit } from '../../Models/Produit.models';
import { ProduitService } from '../../Service/produit-service';

@Component({
  selector: 'app-gest-produit',
  imports: [NavBar, FontAwesomeModule],
  templateUrl: './gest-produit.html',
  styleUrl: './gest-produit.css',
})
export class GestProduit implements OnInit {
  produit: Produit[] = [];
  produitPage: Page<Produit> = {
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
  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    this.produitService
      .getAllProduits(this.produitPage.size, this.produitPage.number)
      .subscribe((data) => {
        this.produitPage = data;
        this.produit = data.content;
      });
  }
}
