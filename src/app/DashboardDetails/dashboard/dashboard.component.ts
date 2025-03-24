import { Component } from '@angular/core';
import { DashboardNavComponent } from '../dashboard-nav/dashboard-nav.component';
import { BannerComponent } from '../../HomePage/banner/banner.component';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardNavComponent, BannerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
