import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignUpForm: boolean = false;

  toggleForm() {
    this.isSignUpForm = !this.isSignUpForm;
  }
}
