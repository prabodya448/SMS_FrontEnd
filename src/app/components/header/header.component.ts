import { Component } from '@angular/core';
import { StudentManagementPageComponent } from '../forms/student-management-page/student-management-page.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StudentManagementPageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
