import { Component } from '@angular/core';
import { OppDivComponent } from '../opp-div/opp-div.component';
import { FaqComponentComponent } from '../faq-component/faq-component.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-channels',
  imports: [OppDivComponent, FaqComponentComponent, FooterComponent],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.css'
})
export class ChannelsComponent {

}
