import { Component, inject } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../Service/produit-service';
import Swal from 'sweetalert2';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-edit-produit',
  imports: [NavBar, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './edit-produit.html',
  styleUrl: './edit-produit.css',
})
export class EditProduit {
  faSignOut = faSignOut;
  produitId: number = 0;
  private route = inject(ActivatedRoute);
  EditProduit = new FormGroup({
    libelle: new FormControl('', [Validators.required]),
    prix: new FormControl('', [Validators.required, Validators.min(0)]),
    quantite: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  constructor(
    private router: Router,
    private produitService: ProduitService,
    private auth: Auth
  ) {
    this.produitId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.produitService.getProduitById(this.produitId).subscribe((data) => {
      this.EditProduit.setValue({
        libelle: data.libelle,
        prix: data.prix.toString(),
        quantite: data.quantite.toString(),
      });
    });
  }

  editProduit() {
    if (this.EditProduit.valid) {
      const produit = {
        libelle: this.EditProduit.value.libelle ?? '',
        prix: Number(this.EditProduit.value.prix ?? 0),
        quantite: Number(this.EditProduit.value.quantite ?? 0),
      };
      this.produitService.updateProduit(this.produitId, produit).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Succes',
            text: 'Produit modifier avec succes',
            icon: 'success',
          });
          this.router.navigate(['/gest-produit']);
        },
        error: (err) => {
          Swal.fire({
            title: 'Erreur',
            text: 'Erreur lors de la modification du produit',
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
