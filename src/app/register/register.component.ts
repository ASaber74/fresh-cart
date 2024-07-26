import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
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

  onRegister(form: FormGroup) {
    console.log(form.value);
  }
}
