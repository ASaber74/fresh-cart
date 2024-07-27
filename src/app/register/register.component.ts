import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private Router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required, this.matchPassword.bind(this)]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^(010|011|012|015)\d{8}$/)],
      ],
    });
  }

  // Custom validator to check if rePassword matches password
  matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    if (this.registerForm) {
      const password = this.registerForm.get('password')?.value;
      if (control.value !== password) {
        return { mismatch: true };
      }
    }
    return null;
  }

  onRegister(user: User) {
    console.log(user);
    this.isLoading = true;
    this._AuthService.register(user).subscribe({
      next: (response) => {
        if (response.message === 'success') {
          this.isLoading = false;
          this.Router.navigate(['/login']);
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err.error.errors?.msge);
      },
    });
  }
}
