import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FournissuerService } from '../../Service/fournissuer-service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProduitService } from '../../Service/produit-service';
import { Produit } from '../../Models/Produit.models';
import Swal from 'sweetalert2';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-add-fournisseur',
  imports: [NavBar, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './add-fournisseur.html',
  styleUrl: './add-fournisseur.css',
})
export class AddFournisseur {
  constructor(
    private fournissuerservice: FournissuerService,
    private router: Router,
    private produitService: ProduitService,
    private auth: Auth
  ) {}

  produits: Produit[] = [];
  AddFournissuer = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    DateNaissance: new FormControl('', [Validators.required]),
    Adresse: new FormControl('', [Validators.required]),
    produit: new FormControl('', [Validators.required]),
  });
  faSignOut = faSignOut;
  ngOnInit(): void {
    this.produitService.ListProduit().subscribe((data) => {
      this.produits = data;
    });
  }

  AddNewFournisseur() {
    if (this.AddFournissuer.valid) {
      const fournisseur = {
        nom: this.AddFournissuer.value.nom ?? '',
        prenom: this.AddFournissuer.value.prenom ?? '',
        email: this.AddFournissuer.value.email ?? '',
        dateNaissance: new Date(this.AddFournissuer.value.DateNaissance ?? ''),
        adresse: this.AddFournissuer.value.Adresse ?? '',
      };
      const produitId = [Number(this.AddFournissuer.value.produit ?? 0)];
      this.fournissuerservice
        .createFournisseur(fournisseur, produitId)
        .subscribe({
          next: (res) => {
            Swal.fire({
              title: 'Succes',
              text: 'Fournisseur ajouter avec succes',
              icon: 'success',
            });
            this.router.navigate(['gest-fournisseur']);
          },
          error: (err) => {
            Swal.fire({
              title: 'Erreur',
              text: "Erreur lors de l'ajout du fournisseur",
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
