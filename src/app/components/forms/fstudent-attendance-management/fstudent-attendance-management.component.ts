import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CStudentManagement } from '../../../model/class/CStudentManagement';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner'; // Import QR Scanner module
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-fstudent-attendance-management',
  standalone: true,

  imports: [CommonModule, FormsModule, NgxScannerQrcodeModule ],  //ZXingScannerModule
   // Add scanner module here
  // schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './fstudent-attendance-management.component.html',
  styleUrls: ['./fstudent-attendance-management.component.css'],
})
export class FstudentAttendanceManagementComponent {
  studentObj: CStudentManagement = new CStudentManagement(); // For a single student
  AttendanceList: CStudentManagement[] = []; // List of students for attendance
  stId: string = ''; // Input field for Student ID
  className: string = ''; // Class name
  attendanceDate: string = ''; // Attendance date
  scannerEnabled: boolean = false; // Control for the QR scanner
  // LOAD_WASM('assets/wasm/ngx-scanner-qrcode.wasm').subscribe();

  studentService = inject(UserService); // Service for fetching student data

  // Add a student manually by ID
  addStudentManually() {
    if (!this.stId) {
      alert('Please enter a Student ID.');
      return;
    }else{
    this.fetchStudentById(this.stId);
    }


  }

  // Toggle scanner on/off
  // toggleScanner() {
  //   this.scannerEnabled = !this.scannerEnabled;
  // }

  // // Handle QR code scanning
  // onQrCodeScanned(event: any) {
  //   if (event && event.text) {
  //     this.fetchStudentById(event.text); // Use event.text to get the QR code data
  //   }
  // }
  
  

  // Fetch student by ID and add to the attendance list
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

  // Submit attendance data
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
