import { Component } from '@angular/core';
import { GravyService } from '../gravy.service';

@Component({
  selector: 'app-roti-gravy',
  templateUrl: './roti-gravy.component.html',
  styleUrls: ['./roti-gravy.component.scss']
})
export class RotiGravyComponent {
  // Properties for Roti and Gravy data
  Gravyes?: any[];

  rotis = [
    { name: 'Roti', price: 20 },
    { name: 'Butter Roti', price: 25 },
    { name: 'Plain Kulcha', price: 25 },
    { name: 'Plain Naan', price: 25 },
    { name: 'Butter Naan', price: 30 },
    { name: 'Butter Kulcha', price: 35 },
    { name: 'Alu Parota', price: 60 },
  ];

  // Tabs State
  selectedTab: string = 'Roti'; // Main tab (Roti/Gravy)
  selectedGravyTab: string = 'All'; // Sub-tab inside Gravy (All, Veg, Non-Veg)

  constructor(private gravyService: GravyService) {}

  ngOnInit(): void {
    this.loadGravy();
  }

  loadGravy(): void {
    this.gravyService.Getgravy().subscribe(
      (data) => {
        this.Gravyes = data;
      },
      (error) => {
        console.error('Error fetching gravy items: ', error);
      }
    );
  }

  // Select the main tab (Roti or Gravy)
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  // Select sub-tab (All, Veg, Non-Veg) for Gravy
  selectGravyTab(tab: string): void {
    this.selectedGravyTab = tab;
  }

  // Filter Gravy items based on the selectedGravyTab
  filteredGravyItems(): any[] {
    if (!this.Gravyes) {
      return []; // Return an empty array if Gravyes is undefined
    }

    if (this.selectedGravyTab === 'All') {
      return this.Gravyes;
    } else {
      return this.Gravyes.filter((gravy) => gravy.type === this.selectedGravyTab);
    }
  }
}
