import { Component } from '@angular/core';
import { SearchBottonComponent } from "../../search-botton/search-botton.component";
import { UserManagementComponent } from "../../search list/user-management/user-management.component";

@Component({
  selector: 'app-fuser-management',
  standalone: true,
  imports: [SearchBottonComponent, UserManagementComponent],
  templateUrl: './fuser-management.component.html',
  styleUrl: './fuser-management.component.css'
})
export class FuserManagementComponent {

}
