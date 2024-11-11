import { Component } from '@angular/core';
import { SearchBottonComponent } from "../../search-botton/search-botton.component";
import { UserManagementComponent } from "../../search list/user-management/user-management.component";
import { User } from '../../../model/class/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fuser-management',
  standalone: true,
  imports: [SearchBottonComponent, UserManagementComponent,FormsModule],  //form for post
  templateUrl: './fuser-management.component.html',
  styleUrl: './fuser-management.component.css'
})
export class FuserManagementComponent {
  userObj : User =  new User();   //post

  userList: User[]=[];   //post
}
