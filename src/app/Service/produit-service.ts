import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../Environnement/environnment';
import { Page } from '../Models/pages.models';
import { Observable } from 'rxjs';
import { Produit } from '../Models/Produit.models';
@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private cookie: CookieService, private http: HttpClient) {}

  public getAllProduits(
    size: number,
    number: number
  ): Observable<Page<Produit>> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Page<Produit>>(
      environment.apiUrl + `/produits?size=${size}&page=${number}`,
      { headers }
    );
  }
  public getProduitById(id: number): Observable<Produit> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Produit>(environment.apiUrl + `/produits/${id}`, {
      headers,
    });
  }
  public createProduit(produit: Produit): Observable<Produit> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<Produit>(environment.apiUrl + `/produits`, produit, {
      headers,
    });
  }
  public updateProduit(id: number, produit: Produit): Observable<Produit> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<Produit>(
      environment.apiUrl + `/produits/${id}`,
      produit,
      { headers }
    );
  }
  public deleteProduit(id: number): Observable<void> {
    const token = this.cookie.get('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(environment.apiUrl + `/produits/${id}`, {
      headers,
    });
  }
}
