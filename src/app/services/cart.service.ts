import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _baseUrl = environment.apiUrl;

  constructor(private _HttpClient: HttpClient) {}

  header: any = {
    token: localStorage.getItem('userToken'),
  };

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      `${this._baseUrl}/cart`,
      { productId: productId },
      {
        headers: this.header,
      }
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`${this._baseUrl}/cart`, {
      headers: this.header,
    });
  }

  removeItem(productId: string): Observable<any> {
    return this._HttpClient.delete(`${this._baseUrl}/cart/${productId}`, {
      headers: this.header,
    });
  }

  updateProductQuantity(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `${this._baseUrl}/cart/${productId}`,
      { count: count },
      {
        headers: this.header,
      }
    );
  }
}
