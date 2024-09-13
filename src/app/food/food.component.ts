import { Component } from '@angular/core';
import { FileUploadService } from '../file-upload.service';



@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {

  starterList = [
    { name: 'French Fries', price: 99, description: 'Crispy golden fries served with a side of ketchup.', type: 'veg' },
    { name: 'Smiley', price: 99, description: 'Potato smiles that are fun and tasty.', type: 'veg' },
    { name: 'Potato Wedges', price: 110, description: 'Seasoned potato wedges with a crispy exterior.', type: 'veg' },
    { name: 'Veg Burger', price: 130, description: 'A hearty veggie patty with fresh veggies and mayo.', type: 'veg' },
    { name: 'Chicken Nuggets', price: 120, description: 'Breaded chicken nuggets served with a dipping sauce.', type: 'non-veg' },
    { name: 'Fish Fingers', price: 150, description: 'Crispy fish fingers with a side of tartar sauce.', type: 'non-veg' },
    { name: 'Chicken Burger', price: 150, description: 'Juicy chicken patty with lettuce, tomato, and mayo.', type: 'non-veg' },
    { name: 'Chicken Fingers', price: 120, description: 'Tender chicken strips with a crispy coating.', type: 'non-veg' },
  ];

  filteredStarters = [...this.starterList];
  isSortDropdownVisible = false;
  selectedFilter: string = 'all'; // Default filter

  // Filter starters by type
  filterStarters(type: string) {
    this.selectedFilter = type; // Update selected filter
    if (type === 'all') {
      this.filteredStarters = [...this.starterList];  // Reset to show all starters
    } else {
      this.filteredStarters = this.starterList.filter(starter => starter.type === type);
    }
  }

  // Toggle sorting dropdown visibility
  toggleSortDropdown() {
    this.isSortDropdownVisible = !this.isSortDropdownVisible;
  }

  // Sort starters by price
  sortStarters(order: string) {
    if (order === 'low-high') {
      this.filteredStarters.sort((a, b) => a.price - b.price);
    } else if (order === 'high-low') {
      this.filteredStarters.sort((a, b) => b.price - a.price);
    }
    this.isSortDropdownVisible = false; // Close dropdown after sorting
  }
 
}
