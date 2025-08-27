import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient, private cookie: CookieService) {}
  login(email: string, password: string) {
    return this.http.post('http://localhost:9000/auth/login', {
      email,
      password,
    });
  }
}
