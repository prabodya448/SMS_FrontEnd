import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flogin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './flogin.component.html',
  styleUrls: ['./flogin.component.css']
})
export class FloginComponent {
  loginObj: any = {
    "EmailId": "",
    "Password": ""
  };

  signupObj: any = {
    "EmailId": "",
    "Password": "",
    "LicenseNo": ""
  };

  isSignUp: boolean = false;
  showPopup: boolean = false;  // This controls the popup visibility

  http = inject(HttpClient);

  constructor(private router: Router) {}

  Onlogin() {
    this.http.post("http://localhost:8000/smsBK/login", this.loginObj).subscribe((res: any) => {
      if (res.message) {
        this.router.navigateByUrl("Fdashboard");
        alert("Login success");
      } else {
        alert("Check username and password");
      }
    });
  }

  Onsignup() {
    this.http.post("http://localhost:8000/smsBK/signup", this.signupObj).subscribe(
      (res: any) => {
        if (res === "User registered successfully") {
          alert("Signup successful!");
          this.isSignUp = false;
        }
      },
      (error) => {
        const errorMessage = error.error || "An error occurred during signup";
        alert(errorMessage); // Show error message
      }
    );
  }

  toggleForm(event: MouseEvent) {
    event.preventDefault(); // Prevent default anchor link behavior
    this.isSignUp = !this.isSignUp;
  }
}
