import { Routes } from '@angular/router';
import { FclassFeesManagementComponent } from './components/forms/fclass-fees-management/fclass-fees-management.component';
import { FclassManagementComponent } from './components/forms/fclass-management/fclass-management.component';
import { FdashboardComponent } from './components/forms/fdashboard/fdashboard.component';
import { FeventManagementComponent } from './components/forms/fevent-management/fevent-management.component';
import { FstudentManagementComponent } from './components/forms/fstudent-management/fstudent-management.component';
import { FstudentAttendanceManagementComponent } from './components/forms/fstudent-attendance-management/fstudent-attendance-management.component';
import { FuserManagementComponent } from './components/forms/fuser-management/fuser-management.component';
import { ReportComponent } from './components/forms/report/report.component';
import { TutorManagementComponent } from './components/forms/tutor-management/tutor-management.component';
import { FloginComponent } from './components/forms/flogin/flogin.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Flogin',
        pathMatch:'full'
    },
    {
        path:'Flogin',
        component: FloginComponent
    },
    {
        path:'',
        component: HeaderComponent,
        children:[
            {
                path:'Fdashboard',
                component: FdashboardComponent
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
        ]
    },


];
