import { Component } from '@angular/core';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.scss']
})
export class RollsComponent {


  rollList = [
    // Veg Rolls
    { name: 'Mix Veg Roll', description: 'Mixed vegetables with spices', price: 70, type: 'veg' },
    { name: 'Tava Paneer Roll', description: 'Paneer cooked on a tawa with spices', price: 70, type: 'veg' },
    { name: 'Chilly Paneer Roll', description: 'Spicy paneer with a tangy sauce', price: 80, type: 'veg' },
    { name: 'Paneer Manchurian Roll', description: 'Paneer in a Manchurian sauce', price: 90, type: 'veg' },
    { name: 'Aloo Roll', description: 'Spiced potato filling', price: 60, type: 'veg' },
    { name: 'Veg Paneer Roll', description: 'Paneer and mixed vegetables', price: 90, type: 'veg' },
    { name: 'Veg Corn Roll', description: 'Corn and vegetables', price: 90, type: 'veg' },
    { name: 'Cheese Corn Roll', description: 'Corn and cheese filling', price: 60, type: 'veg' },
    { name: 'Double Paneer Roll', description: 'Extra paneer for a hearty roll', price: 100, type: 'veg' },
  
    // Non-Veg Rolls
    { name: 'Egg Roll', description: 'Egg with a blend of spices', price: 40, type: 'non-veg' },
    { name: 'Double Egg Roll', description: 'Two eggs rolled with spices', price: 50, type: 'non-veg' },
    { name: 'Egg Cheese Roll', description: 'Egg and cheese combined', price: 70, type: 'non-veg' },
    { name: 'Egg Paneer Roll', description: 'Egg and paneer in a roll', price: 80, type: 'non-veg' },
    { name: 'Chicken Tava Roll', description: 'Chicken cooked on a tawa with spices', price: 80, type: 'non-veg' },
    { name: 'Spicy Chicken Roll', description: 'Chicken with a spicy kick', price: 90, type: 'non-veg' },
    { name: 'Chicken Manchurian Roll', description: 'Chicken in a Manchurian sauce', price: 90, type: 'non-veg' },
    { name: 'Lemon Chicken Roll', description: 'Chicken with a hint of lemon', price: 100, type: 'non-veg' },
    { name: 'Chen 65 Roll', description: 'Chicken with spicy Chen 65 flavor', price: 100, type: 'non-veg' },
    { name: 'Pepper Chicken Roll', description: 'Peppery chicken filling', price: 90, type: 'non-veg' },
    { name: 'Double Chicken Roll', description: 'Double portion of chicken for a filling roll', price: 120, type: 'non-veg' },
    { name: 'Double Egg Chicken Roll', description: 'Egg and chicken combined for a double treat', price: 100, type: 'non-veg' },
    { name: 'Egg Chicken Roll', description: 'Egg and chicken rolled together', price: 90, type: 'non-veg' },
    { name: 'Jumbo Chicken Roll', description: 'A large roll packed with chicken', price: 120, type: 'non-veg' }
  ];
  

  filteredRolls = [...this.rollList];
  isSortDropdownVisible = false;
  selectedFilter: string = 'all'; // Default filter

  // Filter rolls by type
  filterRolls(type: string) {
    this.selectedFilter = type; // Update selected filter
    if (type === 'all') {
      this.filteredRolls = [...this.rollList];  // Reset to show all rolls
    } else {
      this.filteredRolls = this.rollList.filter(roll => roll.type === type);
    }
  }

  // Toggle sorting dropdown visibility
  toggleSortDropdown() {
    this.isSortDropdownVisible = !this.isSortDropdownVisible;
  }

  // Sort rolls by price
  sortRolls(order: string) {
    if (order === 'low-high') {
      this.filteredRolls.sort((a, b) => a.price - b.price);
    } else if (order === 'high-low') {
      this.filteredRolls.sort((a, b) => b.price - a.price);
    }
    this.isSortDropdownVisible = false; // Close dropdown after sorting
  }
}
