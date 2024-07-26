import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private Router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin(user: UserLogin) {
    this.isLoading = true;
    this._AuthService.login(user).subscribe({
      next: (response) => {
        if (response.message === 'success') {
          localStorage.setItem('userToken', response.token);
          this._AuthService.decodeUserData();
          this.isLoading = false;
          this.Router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err.error.errors.msge);
      },
    });
  }
}
