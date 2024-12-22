import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  Onsignout() {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      this.router.navigateByUrl("Flogin");
    }
  }
  

  current_page: string = "";

  change_page(name: string) {
    this.current_page = name;
  }
}
