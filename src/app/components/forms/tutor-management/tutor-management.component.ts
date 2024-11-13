import { Component } from '@angular/core';

@Component({
  selector: 'app-tutor-management',
  standalone: true,
  imports: [],
  templateUrl: './tutor-management.component.html',
  styleUrl: './tutor-management.component.css'
})
export class TutorManagementComponent {
  phoneNumber: string = '';
}
