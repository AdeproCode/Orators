import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  imports: [RouterLink],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css'
})
export class DashboardNavComponent {
 @Input() image: string | any[] = '';
  @Input() dashboard: string | any[] = '';
  @Input() studentlist: string | any[] = '';
  @Input() programs: string | any[] = '';
  @Input() StudentForm: string | any[] = '';
  @Input() link: string | any[] = '';
  

  @Input() studentlistPage: string | any[] = '';
  @Input() programsPage: string | any[] = '';
  @Input() StudentFormPage: string | any[] = '';
  @Input() profile: string | any[] = '';

}
