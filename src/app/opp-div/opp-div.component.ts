import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opp-div',
  imports: [],
  templateUrl: './opp-div.component.html',
  styleUrl: './opp-div.component.css'
})
export class OppDivComponent {
 @Input() image!: string;
  @Input() header!: string;
  @Input() paragraph!: string;



}
