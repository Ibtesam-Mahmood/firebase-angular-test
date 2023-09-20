import { Component } from '@angular/core';

// Each component has this type of decorator
@Component({
  selector: 'app-root', // Name of the component in the html
  templateUrl: './app.component.html', // The html of the componenet
  styleUrls: ['./app.component.css'], // The style sheets
})
export class AppComponent {
  // Variables
  title = 'firebase-test-app';
}
