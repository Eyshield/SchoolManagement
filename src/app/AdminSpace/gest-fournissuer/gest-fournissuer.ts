import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAdd, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';
import { FournissuerService } from '../../Service/fournissuer-service';
import { Fournisseur } from '../../Models/Fournisseurs.models';
import { Page } from '../../Models/pages.models';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-gest-fournissuer',
  imports: [NavBar, FontAwesomeModule, DatePipe, ReactiveFormsModule],
  templateUrl: './gest-fournissuer.html',
  styleUrl: './gest-fournissuer.css',
})
export class GestFournissuer implements OnInit {
  fournisseur: Fournisseur[] = [];
  founissuerPage: Page<Fournisseur> = {
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
  fournisseurSearch = new FormControl('');
  constructor(
    private fournisseurService: FournissuerService,
    private router: Router,
    private authservice: Auth
  ) {}
  ngOnInit(): void {
    this.loadFournisseurs();
  }
  loadFournisseurs() {
    if (this.fournisseurSearch.value && this.fournisseurSearch.value !== '') {
      this.fournisseurService
        .searchFournisseurs(this.fournisseurSearch!.value)
        .subscribe((data) => {
          this.fournisseur = data.content;
          this.founissuerPage = data;
        });
    } else {
      this.fournisseurService
        .getAllFournisseurs(
          this.founissuerPage.size,
          this.founissuerPage.number
        )
        .subscribe((data) => {
          this.founissuerPage = data;
          this.fournisseur = data.content;
        });
    }
  }
  deleteFournisseur(id: number) {
    this.fournisseurService.deleteFournisseur(id).subscribe(() => {});
  }
  navigateToEditFournisseur(id: number) {
    this.router.navigate([`/edit-fournisseur/${id}`]);
  }
  navigateToAddFournisseur() {
    this.router.navigate(['/Add-fournisseur']);
  }
  nextPage() {
    if (this.founissuerPage.number < this.founissuerPage.totalPages - 1) {
      this.founissuerPage.number++;
      this.loadFournisseurs();
    }
  }
  prevPage() {
    if (this.founissuerPage.number > 0) {
      this.founissuerPage.number--;
      this.loadFournisseurs();
    }
  }
  logout() {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
