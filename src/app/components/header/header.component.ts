import { Component } from '@angular/core';
import { PageBodyComponent } from "../page-body/page-body.component";




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PageBodyComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
