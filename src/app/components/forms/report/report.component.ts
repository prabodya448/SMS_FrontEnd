import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  attendanceRecords = [
    {
      "_id": "67627fed6b352af3ce7bfc30",
      "stId": "S001",
      "stname": "John Doe",
      "stEmail": "johndoe@example.com",
      "className": "A/L Maths",
      "createdAt": "2024-12-18T07:55:25.932Z",
    },
    {
      "_id": "676281690d993ed74d8d83bc",
      "stId": "S001",
      "stname": "John Doe",
      "stEmail": "johndoe@example.com",
      "className": "A/L Maths",
      "createdAt": "2024-12-18T08:01:45.112Z",
    },
    {
      "_id": "676281690d993ed74d8d83be",
      "stId": "S002",
      "stname": "Jane Smith",
      "stEmail": "janesmith@example.com",
      "className": "A/L Science",
      "createdAt": "2024-12-18T08:01:45.133Z",
    },
    {
      "_id": "676c34144826fbfc37de7707",
      "stId": "2",
      "stname": "Jane Smith",
      "stEmail": "jane@example.com",
      "className": "A/L BIO",
      "createdAt": "2024-12-25T16:34:28.630Z",
    }
  ];

  // Group records by className into a Map
  getClassRecords() {
    const groups = new Map<string, any[]>();
    this.attendanceRecords.forEach(record => {
      const className = record.className;
      if (!groups.has(className)) {
        groups.set(className, []);
      }
      groups.get(className)!.push(record); // The ! is used to assert that the value is not undefined
    });
    return groups;
  }

  transformDate(date: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
}