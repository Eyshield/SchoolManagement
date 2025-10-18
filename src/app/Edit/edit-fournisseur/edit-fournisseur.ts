import { Component, inject } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../Models/Produit.models';
import { FournissuerService } from '../../Service/fournissuer-service';
import { ProduitService } from '../../Service/produit-service';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-edit-fournisseur',
  imports: [NavBar, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './edit-fournisseur.html',
  styleUrl: './edit-fournisseur.css',
})
export class EditFournisseur {
  fournisseurId: number = 0;
  private route = inject(ActivatedRoute);
  produits: Produit[] = [];
  faSignOut = faSignOut;
  EditFournissuer = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    DateNaissance: new FormControl('', [Validators.required]),

    produit: new FormControl('', [Validators.required]),
  });
  constructor(
    private router: Router,
    private fournissuerService: FournissuerService,
    private produitService: ProduitService,
    private auth: Auth
  ) {
    this.fournisseurId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.fournissuerService
      .getFournisseurById(this.fournisseurId)

      .subscribe((data) => {
        this.EditFournissuer.setValue({
          nom: data.nom,
          prenom: data.prenom,
          adresse: data.adresse,
          email: data.email,
          DateNaissance: new Date(data.dateNaissance)
            .toISOString()
            .substring(0, 10),
          produit: data.produits !== null ? String(data.produits) : null,
        });
      });
    this.produitService.ListProduit().subscribe((data) => {
      this.produits = data;
    });
  }

  EditFournisseur() {
    if (this.EditFournissuer.valid) {
      const fournisseur = {
        nom: this.EditFournissuer.value.nom ?? '',
        prenom: this.EditFournissuer.value.prenom ?? '',
        adresse: this.EditFournissuer.value.adresse ?? '',
        email: this.EditFournissuer.value.email ?? '',
        dateNaissance: new Date(this.EditFournissuer.value.DateNaissance ?? ''),
      };
      const produitId = [Number(this.EditFournissuer.value.produit ?? 0)];
      this.fournissuerService
        .updateFournisseur(this.fournisseurId, fournisseur, produitId)
        .subscribe({
          next: (res) => {
            Swal.fire({
              title: 'Succes',
              text: 'Fournisseur modifié avec succès',
              icon: 'success',
            });
            this.router.navigate(['gest-fournisseur']);
          },
          error: (err) => {
            Swal.fire({
              title: 'Erreur',
              text: 'Erreur lors de la modification du fournisseur',
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
