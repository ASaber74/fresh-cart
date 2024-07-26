import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserLogin } from '../models/user.model';
import { environment } from '../environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _baseURl = environment.apiUrl;
  userData = new BehaviorSubject(null);

  constructor(private httpCient: HttpClient, private _Router: Router) {}

  decodeUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    this.userData.next(jwtDecode(encodedToken));
  }

  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }

  register(userData: User): Observable<any> {
    return this.httpCient.post(`${this._baseURl}/auth/signup`, userData);
  }

  login(userData: UserLogin): Observable<any> {
    return this.httpCient.post(`${this._baseURl}/auth/signin`, userData);
  }
}
