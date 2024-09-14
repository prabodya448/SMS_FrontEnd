import { Component } from '@angular/core';
import { SearchBottonComponent } from "../search-botton/search-botton.component";
import { SearchListComponent } from "../search-list/search-list.component";
import { FstudentManagementComponent } from "../forms/fstudent-management/fstudent-management.component";

@Component({
  selector: 'app-page-body',
  standalone: true,
  imports: [SearchBottonComponent, SearchListComponent, FstudentManagementComponent],
  templateUrl: './page-body.component.html',
  styleUrl: './page-body.component.css'
})
export class PageBodyComponent {

}
