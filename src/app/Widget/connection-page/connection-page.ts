import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../Service/auth';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-connection-page',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './connection-page.html',
  styleUrl: './connection-page.css',
  standalone: true,
})
export class ConnectionPage {
  constructor(private auth: Auth, private router: Router) {}
  loginForm = new FormGroup({
    email: new FormControl(' '),
    password: new FormControl(''),
  });

  Connection() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if (email && password) {
      this.auth.login(email, password).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.token) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error) => {
          console.error('Login error:', error);
        },
      });
    }
  }
}
