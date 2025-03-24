import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SchoolProgramsComponent } from '../../Programs/school-programs/school-programs.component';
import { EnrollmentComponent } from '../enrollment/enrollment.component';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, AboutUsComponent, SchoolProgramsComponent, EnrollmentComponent, GetInTouchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
