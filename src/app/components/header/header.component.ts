import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 current_page:string = "";
 
 change_page (name:string){
  this.current_page = name;
 }

 
}
