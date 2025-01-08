import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ChannelsComponent } from './channels/channels.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ChannelsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'orators';
}
