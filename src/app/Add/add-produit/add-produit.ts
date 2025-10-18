import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { ProduitService } from '../../Service/produit-service';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { icon } from '@fortawesome/fontawesome-svg-core';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-add-produit',
  imports: [NavBar, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css',
})
export class AddProduit {
  constructor(
    private produitService: ProduitService,
    private router: Router,
    private auth: Auth
  ) {}
  AddProduit = new FormGroup({
    Libelle: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required, Validators.min(0)]),
    Quantite: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  faSignOut = faSignOut;
  AddNewProduit() {
    if (this.AddProduit.valid) {
      console.log(this.AddProduit.value);
      const produit = {
        libelle: this.AddProduit.value.Libelle ?? '',
        prix: Number(this.AddProduit.value.prix ?? 0),
        quantite: Number(this.AddProduit.value.Quantite ?? 0),
      };
      this.produitService.createProduit(produit).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Succes',
            text: 'Produit ajouter avec succes',
            icon: 'success',
          });
          this.router.navigate(['gest-produit']);
        },
        error: (err) => {
          Swal.fire({
            title: 'Erreur',
            text: "Erreur lors de l'ajout du produit",
            icon: 'error',
          });
        },
      });
    }
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
