import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  public loggedIn: boolean = false;
  public isAdmin: boolean = false;
  public isEmploye: boolean = false;
  public name: string = '';
  public token: string = '';
  public role: String = '';
  public id: number = 0;
  constructor(private http: HttpClient, private cookie: CookieService) {
    this.token = this.cookie.get('token');
    this.role = this.cookie.get('role');
    this.loggedIn = !!this.token;
  }
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:9000/auth/login', {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          if (response.token) {
            this.token = response.token;
            this.id = response.id;
            this.role = response.role;
            this.cookie.set('role', response.role);
            this.cookie.set('token', response.token);
            this.cookie.set('id', response.id);

            this.loggedIn = true;
            // Vous pouvez également extraire et stocker d'autres informations du token si nécessaire
          }
        })
      );
  }
}
