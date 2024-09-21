import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  activeSection: string = '';

  // Toggle visibility of different sections
  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? '' : section;
  }
}
