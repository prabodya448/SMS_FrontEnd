import { Component } from '@angular/core';
import { SearchBottonComponent } from "../../search-botton/search-botton.component";

@Component({
  selector: 'app-tutor-management',
  standalone: true,
  imports: [SearchBottonComponent],
  templateUrl: './tutor-management.component.html',
  styleUrl: './tutor-management.component.css'
})
export class TutorManagementComponent {
  phoneNumber: string = '';
}
