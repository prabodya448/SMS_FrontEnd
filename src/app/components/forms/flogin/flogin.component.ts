import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './flogin.component.html',
  styleUrls: ['./flogin.component.css']
})
export class FloginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  // Method to handle form submission
  onSubmit() {
    // Check if username and password match the hardcoded credentials
    if (this.username === 'prabodya' && this.password === '1234') {
      // Redirect to the header component
      this.router.navigate(['/header']);
    } else {
      // Show an error message if the credentials are incorrect
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
