import { Component } from '@angular/core';
import { PageBodyComponent } from "../page-body/page-body.component";
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PageBodyComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 current_page:string = "Dashboard";

 change_page (name:string){
  this.current_page = name;
 }
}
