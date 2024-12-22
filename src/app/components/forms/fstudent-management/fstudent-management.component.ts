import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { StudentManagementComponent } from "../../search list/student-management/student-management.component";
import { CStudentManagement } from '../../../model/class/CStudentManagement';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import html2canvas from 'html2canvas';  // Import html2canvas

@Component({
  selector: 'app-fstudent-management',
  standalone: true,
  imports: [StudentManagementComponent, FormsModule, CommonModule, QRCodeModule],
  templateUrl: './fstudent-management.component.html',
  styleUrls: ['./fstudent-management.component.css']
})
export class FstudentManagementComponent {
  studentObj: CStudentManagement = new CStudentManagement();
  studentList: CStudentManagement[] = [];
  qrData: string = '';

  // Marking qrCodeElementRef as optional
  @ViewChild('qrCodeElement', { static: false }) qrCodeElementRef?: ElementRef;

  studentService = inject(UserService);

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    this.studentService.getStudent().subscribe((res: APIResponseModel) => {
      this.studentList = res.content;
    });
  }

  onSaveStudent() {
    if (this.studentObj.stId !== 0) {
      this.studentService.updateStudents(this.studentObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert("Student updated successfully");
          this.loadStudent();
          this.clearForm();
        } else {
          alert("Failed to update student");
        }
      });
    } else {
      this.studentService.saveStudents(this.studentObj).subscribe((res: APIResponseModel) => {
        if (res.message) {
          alert("Student added successfully. Refresh the page for updates.");
          this.loadStudent();
          this.clearForm();
        } else {
          alert("Failed to add student");
        }
      });
    }
  }

  clearForm() {
    this.studentObj = new CStudentManagement();
    this.qrData = '';  // Reset qrData
  }

  onEditStudent(data: CStudentManagement) {
    this.studentObj = data;
    console.log("Received student data:", this.studentObj);
    this.qrData = `${data.stId}`;  // Set qrData to only the student ID (stId)
  }

  // Method to download the QR code as an image
  downloadQRCode() {
    if (this.qrCodeElementRef) {
      html2canvas(this.qrCodeElementRef.nativeElement).then((canvas) => {
    
        const width = canvas.width;
        const height = canvas.height;
  
        const size = Math.max(width, height);
  
        const squareCanvas = document.createElement('canvas');
        squareCanvas.width = size;
        squareCanvas.height = size;

        const ctx = squareCanvas.getContext('2d');

        if (ctx) {
          ctx.drawImage(canvas, 0, 0, width, height, 0, 0, size, size);

          const link = document.createElement('a');
          link.href = squareCanvas.toDataURL('image/png');
          link.download = `student_${this.studentObj.stId}_qrcode.png`; 
          link.click(); 
        } else {
          console.error("Unable to get 2D context for the square canvas.");
        }
      });
    }
  }
  
  
}
