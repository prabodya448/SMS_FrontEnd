import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CStudentManagement } from '../../../model/class/CStudentManagement';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { CAttendance } from '../../../model/class/CAttendance';

@Component({
  selector: 'app-fstudent-attendance-management',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxScannerQrcodeModule], // Import necessary modules
  templateUrl: './fstudent-attendance-management.component.html',
  styleUrls: ['./fstudent-attendance-management.component.css'],
})
export class FstudentAttendanceManagementComponent {
  studentObj: CStudentManagement = new CStudentManagement(); // Single student object
  AttendanceList: CAttendance[] = []; // List of students for attendance
  stId: string = ''; // Student ID input
  className: string = ''; // Class name input
  attendanceMarked: boolean = false; // Flag to check if attendance is marked
  studentService = inject(UserService); // Student service to fetch student data

  // Add student manually by ID
  addStudentManually() {
    if (!this.stId) {
      alert('Please enter a Student ID.');
      return;
    } else {
      this.fetchStudentById(this.stId);
    }
  }

  // Handle scanned QR code
  onQRCodeScanned(value: string) {
    this.stId = value; // Set the scanned student ID
    this.addStudentManually(); // Add student to list
  }

  // Fetch student by ID from the service
  private fetchStudentById(studentId: string) {
    this.studentService.getStudentById(studentId).subscribe((res: CStudentManagement) => {
      if (res) {
        const isAlreadyAdded = this.AttendanceList.some(
          (student) => student.stId === res.stId
        );
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

 // Submit the attendance data
submitAttendance() {
  if (!this.AttendanceList.length) {
    alert('No students added for attendance.');
    return;
  }

  // Adjusted structure to match only required fields
  const attendanceData = {
    className: this.className,
    students: this.AttendanceList.map(student => ({
      stId: student.stId,
      stname: student.stname,
      stEmail: student.stEmail
    }))
  };

  console.log('Submitting attendance data:', attendanceData); // Log the data

  this.studentService.submitAttendance(attendanceData).subscribe(
    (response) => {
      alert('Attendance submitted successfully.');
      this.AttendanceList = []; // Clear the list after submission
      this.attendanceMarked = true; // Set attendance marked flag
    },
    (error) => {
      alert('Error submitting attendance: ' + error.message);
      console.error('Error details:', error); // Log error details
    }
  );
}


}
