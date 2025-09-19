import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../Service/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-connection-page',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './connection-page.html',
  styleUrl: './connection-page.css',
  standalone: true,
})
export class ConnectionPage {
  constructor(
    private auth: Auth,
    private router: Router,
    private cookieService: CookieService
  ) {}
  loginForm = new FormGroup({
    email: new FormControl(' '),
    password: new FormControl(''),
  });

  Connection() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if (email && password) {
      this.auth.login(email, password).subscribe(
        (response) => {
          if (response.token) {
            this.auth.token = response.token;
            this.auth.id = response.id;
            this.auth.role = response.role;
            this.cookieService.set('role', response.role);
            this.cookieService.set('token', response.token);
            this.cookieService.set('id', response.id);
            if (response.role === 'Admin') {
              this.router.navigate(['/dashboard']);
            } else {
              swal.fire({
                title: 'Erreur',
                text: "Nom d'utilisateur ou mot de passe incorrect",
                icon: 'error',
              });
            }
          } else {
            swal.fire({
              title: 'Erreur',
              text: "Nom d'utilisateur ou mot de passe incorrect",
              icon: 'error',
            });
          }
        },
        (error) => {
          swal.fire({
            title: 'Erreur',
            text: "Nom d'utilisateur ou mot de passe incorrect",
            icon: 'error',
          });
        }
      );
    }
  }
}
