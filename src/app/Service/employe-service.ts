import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { EmployePage } from '../Models/pages.models';
import { Employe } from '../Models/Employe.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private cookieService: CookieService, private http: HttpClient) {}

  public getAllEmployes(
    size: number,
    number: number
  ): Observable<EmployePage<Employe>> {
    const token = this.cookieService.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<EmployePage<Employe>>(
      `http://localhost:8080/api/employes?size=${size}&page=${number}`,
      { headers }
    );
  }
}
