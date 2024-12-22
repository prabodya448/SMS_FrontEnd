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
    "LicenseNumber": ""
  };

  isSignUp: boolean = false;

  http = inject(HttpClient);

  constructor(private router: Router) {}

  Onlogin() {
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert("login success");
        this.router.navigateByUrl("Fdashboard");
      } else {
        alert("check username and password");
      }
    });
  }

  Onsignup() {
    // Handle sign-up logic here
    alert("Sign Up logic to be implemented!");
  }

  toggleForm(event: MouseEvent) {
    event.preventDefault(); // Prevent default anchor link behavior
    this.isSignUp = !this.isSignUp;
  }
}
