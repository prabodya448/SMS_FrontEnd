import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { FclassFeesManagementComponent } from './components/forms/fclass-fees-management/fclass-fees-management.component';
import { FclassManagementComponent } from './components/forms/fclass-management/fclass-management.component';
import { FdashboardComponent } from './components/forms/fdashboard/fdashboard.component';
import { FeventManagementComponent } from './components/forms/fevent-management/fevent-management.component';
import { FstudentManagementComponent } from './components/forms/fstudent-management/fstudent-management.component';
import { FstudentAttendanceManagementComponent } from './components/forms/fstudent-attendance-management/fstudent-attendance-management.component';
import { FuserManagementComponent } from './components/forms/fuser-management/fuser-management.component';
import { ReportComponent } from './components/forms/report/report.component';
import { TutorManagementComponent } from './components/forms/tutor-management/tutor-management.component';
import { UserManagementComponent } from './components/search list/user-management/user-management.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'header',
        pathMatch:'full'
    },

    {
        path:'header',
        component: HeaderComponent
    },
    {
        path:'pageBody',
        component: PageBodyComponent
    },
    {
        path:'FclassFeesManagement',
        component: FclassFeesManagementComponent
    },
    {
        path:'FclassManagement',
        component: FclassManagementComponent
    },
    {
        path:'Fdashboard',
        component: FdashboardComponent
    },
    {
        path:'FeventManagement',
        component: FeventManagementComponent
    },
    {
        path:'FstudentManagement',
        component: FstudentManagementComponent
    },
    {
        path:'FstudentAttendance',
        component: FstudentAttendanceManagementComponent
    },
    {
        path:'FuserManagement',
        component: FuserManagementComponent
    },
    {
        path:'Report',
        component: ReportComponent
    },
    {
        path:'TutorManagementr',
        component: TutorManagementComponent
    },
    {
        path:'UserManagement',
        component: UserManagementComponent
    },
];
