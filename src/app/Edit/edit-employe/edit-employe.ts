import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeService } from '../../Service/employe-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBar } from '../../Widget/nav-bar/nav-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Auth } from '../../Service/auth';

@Component({
  selector: 'app-edit-employe',
  standalone: true,
  imports: [NavBar, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './edit-employe.html',
  styleUrl: './edit-employe.css',
})
export class EditEmploye implements OnInit {
  faSignout = faSignOut;
  Editemploye = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    Role: new FormControl('', [Validators.required]),

    DateNaissance: new FormControl('', [Validators.required]),
    Adresse: new FormControl('', [Validators.required]),
  });

  employeId: number = 0;
  id = signal('');

  constructor(
    private employeService: EmployeService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: Auth
  ) {
    this.employeId = this.route.snapshot.params['id'];
  }
  ngOnInit(): void {
    console.log(this.employeId);
    this.employeService.getEmployeById(this.employeId).subscribe((data) => {
      console.log(data.adresse);
      this.Editemploye.patchValue({
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        password: data.password,
        Role: data.role,
        DateNaissance: new Date(data.dateNaissance)
          .toISOString()
          .substring(0, 10),
        Adresse: data.adresse,
      });
    });
  }
  EditEmploye() {
    console.log(this.Editemploye.value);
    if (this.Editemploye.valid) {
      const employe = {
        nom: this.Editemploye.value.nom ?? '',
        prenom: this.Editemploye.value.prenom ?? '',
        email: this.Editemploye.value.email ?? '',
        role: this.Editemploye.value.Role ?? '',
        password: this.Editemploye.value.password ?? '',
        dateNaissance: new Date(this.Editemploye.value.DateNaissance ?? ''),
        adresse: this.Editemploye.value.Adresse ?? '',
      };
      this.employeService.updateEmploye(this.employeId, employe).subscribe({
        next: (res) => {
          Swal.fire({
            title: 'Succes',
            text: 'Employe modifié avec succes',
            icon: 'success',
          });
          this.router.navigate(['gest-employe']);
        },
        error: (err) => {
          Swal.fire({
            title: 'Erreur',
            text: "Erreur lors de la modification de l'employe",
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
