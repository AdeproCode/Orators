import { Routes } from '@angular/router';
import { HomeComponent } from './HomePage/home/home.component';
import { AboutUsComponent } from './HomePage/about-us/about-us.component';
import { SchoolProgramsComponent } from './Programs/school-programs/school-programs.component';
import { GetInTouchComponent } from './HomePage/get-in-touch/get-in-touch.component';
import { RegisterComponent } from './Reg-Login/register/register.component';
import { DashboardComponent } from './DashboardDetails/dashboard/dashboard.component';
import { StudentListComponent } from './DashboardDetails/student-list/student-list.component';
import { StudentFormComponent } from './DashboardDetails/student-form/student-form.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'programs', component: SchoolProgramsComponent },
    { path: 'contact', component: GetInTouchComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'studentlist', component: StudentListComponent },
    { path: 'programs', component: GetInTouchComponent },
    { path: 'studentform', component: StudentFormComponent }

];
