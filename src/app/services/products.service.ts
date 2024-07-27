import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _baseUrl = environment.apiUrl;

  constructor(private httpCient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpCient.get(`${this._baseUrl}/products`);
  }

  getSpecificProduct(id: string): Observable<any> {
    return this.httpCient.get(`${this._baseUrl}/products/${id}`);
  }

  getCategories(): Observable<any> {
    return this.httpCient.get(`${this._baseUrl}/categories`);
  }
}
