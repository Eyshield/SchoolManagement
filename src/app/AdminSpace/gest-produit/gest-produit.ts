import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Page } from '../../Models/pages.models';
import { Produit } from '../../Models/Produit.models';
import { ProduitService } from '../../Service/produit-service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-gest-produit',
  imports: [NavBar, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './gest-produit.html',
  styleUrl: './gest-produit.css',
})
export class GestProduit implements OnInit {
  produit: Produit[] = [];
  produitPage: Page<Produit> = {
    content: [],
    totalElements: 0,
    totalPages: 0,
    size: 8,
    number: 0,
    first: true,
    last: true,
    numberOfElements: 0,
    empty: true,
  };

  faSearch = faSearch;
  faSignOut = faSignOut;
  faAdd = faAdd;
  produitSearch = new FormControl('');
  constructor(
    private produitService: ProduitService,
    private router: Router,
    private authService: Auth
  ) {}
  ngOnInit(): void {
    this.loadProduits();
  }
  loadProduits() {
    if (this.produitSearch.value && this.produitSearch.value !== '') {
      this.produitService
        .searchProduits(this.produitSearch!.value)
        .subscribe((data) => {
          this.produit = data.content;
          this.produitPage = data;
        });
    } else {
      this.produitService
        .getAllProduits(this.produitPage.size, this.produitPage.number)
        .subscribe((data) => {
          console.log(data);
          this.produitPage = data;
          this.produit = data.content;
        });
    }
  }
  deleteEmployee(id: number) {
    this.produitService.deleteProduit(id).subscribe(() => {});
  }
  navigateToEditEmployee(id: number) {
    this.router.navigate([`/edit-produit/${id}`]);
  }
  navigateToAddEmployee() {
    this.router.navigate(['/Add-produit']);
  }
  nextPage() {
    if (this.produitPage.number < this.produitPage.totalPages - 1) {
      this.produitPage.number++;
      this.loadProduits();
    }
  }
  prevPage() {
    if (this.produitPage.number > 0) {
      this.produitPage.number--;
      this.loadProduits();
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
