import { Component } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.scss']
})
export class SnacksComponent {

  selectedTab: string = 'Veg'; // Default tab

 
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  snacks = [
    { name: 'Peanut Masala', price: 50 },
    { name: 'Masala Papad', price: 50 },
    { name: 'Onion Pakoda', price: 100 },
    { name: 'Capsicum Ring', price: 100 },
    { name: 'Capsicum Bajji', price: 80 },
    { name: 'Finger Chips', price: 100 },
    { name: 'Veg Vada', price: 100 },
    { name: 'Baby Corn Kabab', price: 100 },
    { name: 'Baby Corn Manchurian', price: 100 },
    { name: 'Baby Corn Chilli', price: 100 },
    { name: 'Baby Corn Pepper Fry', price: 100 },
    { name: 'Gobi Manchurian', price: 80 },
    { name: 'Gobi Chilli', price: 100 },
    { name: 'Paneer Chilli', price: 140 },
    { name: 'Paneer 65 Dry', price: 160 },
    { name: 'Paneer Pepper Dry', price: 160 },
    { name: 'Paneer Manchurian', price: 150 },
    
  ];

  eggSnacks = [
    { name: 'Boild Egg', price: 20 },
    { name: 'Omlet', price: 30 },
    { name: 'Egg Burji', price: 50 },
    { name: 'Egg Chilli', price: 80 },
    { name: 'Egg Manchurian', price: 80 },
    { name: 'Egg Pakoda', price: 80 },
  ];

  
}
