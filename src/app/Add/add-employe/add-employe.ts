import { Component } from '@angular/core';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeService } from '../../Service/employe-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-add-employe',
  imports: [NavBar, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './add-employe.html',
  styleUrl: './add-employe.css',
  standalone: true,
})
export class AddEmploye {
  constructor(
    private epmoyeservice: EmployeService,
    private router: Router,
    private auth: Auth
  ) {}
  faSignOut = faSignOut;
  Addemploye = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    Role: new FormControl('', [Validators.required]),
    poste: new FormControl('', [Validators.required]),

    DateNaissance: new FormControl('', [Validators.required]),
    Adresse: new FormControl('', [Validators.required]),
  });

  AddNewEmploye() {
    if (this.Addemploye.valid) {
      const employe = {
        nom: this.Addemploye.value.nom ?? '',
        prenom: this.Addemploye.value.prenom ?? '',
        email: this.Addemploye.value.email ?? '',
        role: this.Addemploye.value.Role ?? '',
        password: this.Addemploye.value.password ?? '',
        poste: this.Addemploye.value.poste ?? '',

        dateNaissance: new Date(this.Addemploye.value.DateNaissance ?? ''),
        adresse: this.Addemploye.value.Adresse ?? '',
      };

      this.epmoyeservice.createEmploye(employe).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Succes',
            text: 'Employe ajouter avec succes',
            icon: 'success',
          });
          this.router.navigate(['gest-employe']);
        },
        error: (err) => {
          Swal.fire({
            title: 'Erreur',
            text: "Erreur lors de l'ajout de l'employe",
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
