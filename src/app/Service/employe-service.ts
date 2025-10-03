import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { Page } from '../Models/pages.models';
import { Employe } from '../Models/Employe.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../Environnement/environnment';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor(private cookieService: CookieService, private http: HttpClient) {}

  public getAllEmployes(
    size: number,
    number: number
  ): Observable<Page<Employe>> {
    const token = this.cookieService.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Page<Employe>>(
      environment.apiUrl + `/employes?size=${size}&page=${number}`,
      { headers }
    );
  }
  public getEmployeById(id: number): Observable<Employe> {
    const token = this.cookieService.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Employe>(environment.apiUrl + `/employes/${id}`, {
      headers,
    });
  }

  public createEmploye(employe: Employe): Observable<Employe> {
    const token = this.cookieService.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<Employe>(environment.apiUrl + `/employes`, employe, {
      headers,
    });
  }
  public updateEmploye(id: number, employe: Employe): Observable<Employe> {
    const token = this.cookieService.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<Employe>(
      environment.apiUrl + `/employes/${id}`,
      employe,
      { headers }
    );
  }
  public deleteEmploye(id: number): Observable<void> {
    const token = this.cookieService.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(environment.apiUrl + `/employes/${id}`, {
      headers,
    });
  }
}
