import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { Auth } from '../../Service/auth';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBox,
  faShoppingCart,
  faSignOut,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { Route, Router } from '@angular/router';
import { ProduitService } from '../../Service/produit-service';
import { EmployeService } from '../../Service/employe-service';
import { FournissuerService } from '../../Service/fournissuer-service';

@Component({
  selector: 'app-dashboard',
  imports: [NavBar, FontAwesomeModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard {
  nbProduits: number = 0;
  nbEmployes: number = 0;
  nbFournisseurs: number = 0;
  constructor(
    private auth: Auth,
    private router: Router,
    private produitService: ProduitService,
    private employeService: EmployeService,
    private fournisseurService: FournissuerService
  ) {}
  faSignOut = faSignOut;
  faUsers = faUsers;
  faBox = faBox;
  faShoppingCart = faShoppingCart;
  ngOnInit(): void {
    this.loadStats();
  }
  loadStats() {
    this.produitService.getAllProduits(5, 0).subscribe((data) => {
      this.nbProduits = data.totalElements;
    });
    this.employeService.getAllEmployes(5, 0).subscribe((data) => {
      this.nbEmployes = data.totalElements;
    });
    this.fournisseurService.getAllFournisseurs(5, 0).subscribe((data) => {
      this.nbFournisseurs = data.totalElements;
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
