import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { CStudentManagement } from '../../../model/class/CStudentManagement';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-fstudent-attendance-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fstudent-attendance-management.component.html',
  styleUrls: ['./fstudent-attendance-management.component.css'],
})
export class FstudentAttendanceManagementComponent {
  studentObj: CStudentManagement = new CStudentManagement(); // For a single student
  AttendanceList: CStudentManagement[] = []; // List of students for attendance
  stId: string = ''; // Input field for Student ID
  className: string = ''; // Class name
  attendanceDate: string = ''; // Attendance date

  studentService = inject(UserService); // Service for fetching student data

  addStudentManually() {
    if (!this.stId) {
      alert('Please enter a Student ID.');
      return;
    }

    this.studentService.getStudentById(this.stId).subscribe((res: CStudentManagement) => {
      if (res) {
        // Check if the student is already in the list
        const isAlreadyAdded = this.AttendanceList.some((student) => student.stId === res.stId);
        if (isAlreadyAdded) {
          alert('Student already added.');
        } else {
          this.AttendanceList.push(res); // Add the student to the list
        }
      } else {
        alert('Student not found.');
      }
    });
  }

  submitAttendance() {
    if (!this.AttendanceList.length) {
      alert('No students added for attendance.');
      return;
    }

    const attendanceData = {
      className: this.className,
      attendanceDate: this.attendanceDate,
      students: this.AttendanceList,
    };

    this.studentService.submitAttendance(attendanceData).subscribe(
      (response) => {
        alert('Attendance submitted successfully.');
        this.AttendanceList = []; // Clear the table after submission
      },
      (error) => {
        alert('Error submitting attendance: ' + error.message);
      }
    );
  }
}