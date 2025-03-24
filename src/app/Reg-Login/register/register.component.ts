import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  ngOnInit() {
    document.body.classList.add('hide-navbar'); // Add class to hide navbar
  }

  ngOnDestroy() {
    document.body.classList.remove('hide-navbar'); // Remove class when leaving
  }

}
