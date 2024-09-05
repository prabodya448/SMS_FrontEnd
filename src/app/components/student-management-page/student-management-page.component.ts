import { Component } from '@angular/core';
import { SearchBottonComponent } from "../search-botton/search-botton.component";
import { SearchListComponent } from "../search-list/search-list.component";

@Component({
  selector: 'app-student-management-page',
  standalone: true,
  imports: [SearchBottonComponent, SearchListComponent],
  templateUrl: './student-management-page.component.html',
  styleUrl: './student-management-page.component.css'
})
export class StudentManagementPageComponent {

}
