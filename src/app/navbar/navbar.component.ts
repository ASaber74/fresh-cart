import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedin: boolean = false;
  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() !== null) {
          this.isLoggedin = true;
        } else {
          this.isLoggedin = false;
        }
      },
    });
  }

  onLogout(){
    this._AuthService.logout();
  }
}
