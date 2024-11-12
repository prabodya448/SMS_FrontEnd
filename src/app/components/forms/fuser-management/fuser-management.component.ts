import { Component, inject } from '@angular/core';
import { SearchBottonComponent } from "../../search-botton/search-botton.component";
import { UserManagementComponent } from "../../search list/user-management/user-management.component";
import { User } from '../../../model/class/User';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fuser-management',
  standalone: true,
  imports: [SearchBottonComponent, UserManagementComponent, FormsModule,CommonModule],
  templateUrl: './fuser-management.component.html',
  styleUrl: './fuser-management.component.css'
})
export class FuserManagementComponent {
  userObj: User = new User();   // post walatai put walatai
  userList: User[] = [];   // usersl list krnn

  userService = inject(UserService);

  ngOnInit(): void {
    this.loadUser();
  }

  // Load all users
  loadUser() {
    this.userService.getUsers().subscribe((res: APIResponseModel) => {
      this.userList = res.content;
    });
  }

  // Save new user or update existing user
  onSaveUser() {
    if (this.userObj.userID !== 0) {
      // If user ID exists, update the user
      this.userService.updateUsers(this.userObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert("User updated successfully");
          this.loadUser();  // Reload user list after update
          this.clearForm();  // Clear form after update
        } else {
          alert("Failed to update user");
        }
      });
    } else {
      // If user ID is 0, create a new user
      this.userService.saveUsers(this.userObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert("User added successfully");
          this.loadUser();  // Reload user list after adding
          this.clearForm();  // Clear form after add
        } else {
          alert("Failed to add user");
        }
      });
    }
  }

  // Reset the form to add a new user
  clearForm() {
    this.userObj = new User(); // Reset form
  }

  // Set user data when editing
  onEditUser(data: User) {
    this.userObj = data;  // Set user data to form for editing
    console.log("Received user data:", this.userObj);  // For debugging
  }
}
