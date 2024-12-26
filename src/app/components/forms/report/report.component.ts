import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CAttendance } from '../../../model/class/CAttendance';
import { UserService } from '../../../services/user.service';
import { SearchPipe } from '../../../search.pipe';
import { APIResponseModel } from '../../../model/interface/user';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchPipe],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit{
  attendanceRecordsObj : CAttendance = new CAttendance();
  attendanceRecordsList : CAttendance[]=[];

  isLoader: boolean = true;

  attendanceRecordsService  = inject(UserService)
  searchText="";

  ngOnInit(): void {
    this.attendanceRecords();
  }

  attendanceRecords(){
    this.attendanceRecordsService.getAttendance().subscribe((res:APIResponseModel)=>{
      this.attendanceRecordsList = res.content;
    })
   }
  // attendanceRecords = [
  //   {
  //     "_id": "67627fed6b352af3ce7bfc30",
  //     "stId": "S001",
  //     "stname": "John Doe",
  //     "stEmail": "johndoe@example.com",
  //     "className": "A/L Maths",
  //     "createdAt": "2024-12-18T07:55:25.932Z",
  //   },
  //   {
  //     "_id": "676281690d993ed74d8d83bc",
  //     "stId": "S001",
  //     "stname": "John Doe",
  //     "stEmail": "johndoe@example.com",
  //     "className": "A/L Maths",
  //     "createdAt": "2024-12-18T08:01:45.112Z",
  //   },
  //   {
  //     "_id": "676281690d993ed74d8d83be",
  //     "stId": "S002",
  //     "stname": "Jane Smith",
  //     "stEmail": "janesmith@example.com",
  //     "className": "A/L Science",
  //     "createdAt": "2024-12-18T08:01:45.133Z",
  //   },
  //   {
  //     "_id": "676c34144826fbfc37de7707",
  //     "stId": "2",
  //     "stname": "Jane Smith",
  //     "stEmail": "jane@example.com",
  //     "className": "A/L BIO",
  //     "createdAt": "2024-12-25T16:34:28.630Z",
  //   }
  // ];

  // Group records by className into a Map
  getClassRecords() {
    const groups = new Map<string, CAttendance[]>();
    this.attendanceRecordsList.forEach(record => {
      const className = record.className;
      if (!groups.has(className)) {
        groups.set(className, []);
      }
      groups.get(className)!.push(record); // The ! is used to assert that the value is not undefined
    });
    return groups;
  }
  

  transformDate(date: string | undefined | null): string {
    if (!date) {
      return 'N/A'; // Fallback if date is null or undefined
    }
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  
}