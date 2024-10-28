import { Component, input } from '@angular/core';
import { SearchBottonComponent } from "../search-botton/search-botton.component";
import { SearchListComponent } from "../search-list/search-list.component";
import { FstudentManagementComponent } from "../forms/fstudent-management/fstudent-management.component";
import { FclassFeesManagementComponent } from "../forms/fclass-fees-management/fclass-fees-management.component";
import { FuserManagementComponent } from "../forms/fuser-management/fuser-management.component";
import { FclassManagementComponent } from "../forms/fclass-management/fclass-management.component";
import { FeventManagementComponent} from "../forms/fevent-management/fevent-management.component";
import{TutorManagementComponent} from "../forms/tutor-management/tutor-management.component";
import{FstudentAttendanceManagementComponent} from "../forms/fstudent-attendance-management/fstudent-attendance-management.component";
import { CommonModule } from '@angular/common';
import { ReportComponent } from "../forms/report/report.component";
import { FdashboardComponent } from "../forms/fdashboard/fdashboard.component";


@Component({
  selector: 'app-page-body',
  standalone: true,
  imports: [SearchBottonComponent, SearchListComponent, FstudentManagementComponent, FclassFeesManagementComponent, FstudentAttendanceManagementComponent, FuserManagementComponent, FclassManagementComponent, FeventManagementComponent, TutorManagementComponent, CommonModule, ReportComponent, FdashboardComponent],
  templateUrl: './page-body.component.html',
  styleUrl: './page-body.component.css'
})
export class PageBodyComponent {
  message= input("hellow hellow");
}
