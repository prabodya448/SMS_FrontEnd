import { Component, inject } from '@angular/core';
import { StudentManagementComponent } from "../../search list/student-management/student-management.component";
import { CStudentManagement } from '../../../model/class/CStudentManagement';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fstudent-management',
  standalone: true,
  imports: [ StudentManagementComponent,FormsModule,CommonModule],
  templateUrl: './fstudent-management.component.html',
  styleUrl: './fstudent-management.component.css'
})
export class FstudentManagementComponent {

  studentObj: CStudentManagement = new CStudentManagement();   // post walatai put walatai
  studentList: CStudentManagement[] = [];   // usersl list krnn

  studentService = inject(UserService);

  ngOnInit(): void {
    this.loadStudent();
  }

  // Load all users
  loadStudent() {
    this.studentService.getStudent().subscribe((res: APIResponseModel) => {
      this.studentList = res.content;
    });
  }

  // Save new user or update existing user
  onSaveStudent() {
    if (this.studentObj.stId !== 0) {
      // If user ID exists, update the user
      this.studentService.updateStudents(this.studentObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert("Student updated successfully");
          this.loadStudent();  // Reload user list after update
          this.clearForm();  // Clear form after update
        } else {
          alert("Failed to update user");
        }
      });
    } else {
      // If user ID is 0, create a new user
      this.studentService.saveStudents(this.studentObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert("User added successfully");
          this.loadStudent();  // Reload user list after adding
          this.clearForm();  // Clear form after add
        } else {
          alert("Failed to add user");
        }
      });
    }
  }

  // Reset the form to add a new user
  clearForm() {
    this.studentObj = new CStudentManagement(); // Reset form
  }

  // Set user data when editing
  
  onEditStudent(data: CStudentManagement) {
    this.studentObj = data; // Populate the form with the selected student's data
    console.log("Received user data:", this.studentObj); // Debugging log
  }
  
}
