import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  submitRegistration(): void {
    console.log(this.form);
  }
}
