import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuOpen = false;

  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}
