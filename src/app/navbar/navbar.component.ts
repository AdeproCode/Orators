import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() image: string | any[] = '';
  @Input() home: string | any[] = '';
  @Input() about: string | any[] = '';
  @Input() programs: string | any[] = '';
  @Input() contact: string | any[] = '';
  @Input() register: string | any[] = '';
  @Input() link: string | any[] = '';
  

  @Input() homePage: string | any[] = '';
  @Input() aboutPage: string | any[] = '';
  @Input() programsPage: string | any[] = '';
  @Input() contactPage: string | any[] = '';
  @Input() login: string | any[] = '';
}
