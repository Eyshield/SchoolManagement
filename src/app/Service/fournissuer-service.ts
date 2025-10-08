import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../Environnement/environnment';
import { Observable } from 'rxjs';
import { Page } from '../Models/pages.models';
import { Fournisseur } from '../Models/Fournisseurs.models';
@Injectable({
  providedIn: 'root',
})
export class FournissuerService {
  constructor(private cookie: CookieService, private http: HttpClient) {}
  getAllFournisseurs(
    size: number,
    number: number
  ): Observable<Page<Fournisseur>> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Page<Fournisseur>>(
      environment.apiUrl + `/fournisseur?size=${size}&page=${number}`,
      { headers }
    );
  }
  getFournisseurById(id: number): Observable<Fournisseur> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Fournisseur>(
      environment.apiUrl + `/fournisseur/${id}`,
      { headers }
    );
  }
  createFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<Fournisseur>(
      environment.apiUrl + `/fournisseur`,
      fournisseur,
      { headers }
    );
  }
  updateFournisseur(
    id: number,
    fournisseur: Fournisseur
  ): Observable<Fournisseur> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<Fournisseur>(
      environment.apiUrl + `/fournisseur/${id}`,
      fournisseur,
      { headers }
    );
  }
  deleteFournisseur(id: number): Observable<void> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(environment.apiUrl + `/fournisseur/${id}`, {
      headers,
    });
  }
}
