import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  @Input() bannerBtn: string | any[] = '';
  @Input() title: string | any[] = '';
  @Input() paragraph: string | any[] = '';
}
