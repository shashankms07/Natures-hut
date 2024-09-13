import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {

  

  burgerList = [
    {
      name: 'Classic Burger',
      price: 150,
      description: 'A juicy patty topped with fresh lettuce, tomato, and our special sauce.',
      imageUrl: 'assets/images/th.jpeg',
      type: 'non-veg',
    },
    {
      name: 'Chicken Zinger Burger',
      price: 130,
      description: 'Crispy chicken fillet with a spicy kick, served with lettuce and mayo.',
      imageUrl: 'assets/images/th.jpeg',
      type: 'non-veg',
    },
    {
      name: 'Veggie Delight Burger',
      price: 100,
      description: 'A delicious veggie patty topped with cheese, lettuce, and tomato.',
      imageUrl: 'assets/images/th.jpeg',
      type: 'veg',
    },
    {
      name: 'Veggie Burger Special',
      price: 120,
      description: 'Grilled veggie patty with fresh veggies and mayo.',
      imageUrl: 'assets/images/th.jpeg',
      type: 'veg',
    },
  ];

 
  filteredBurgers = [...this.burgerList];
  isSortDropdownVisible = false;
  selectedFilter: string = 'all'; // Default filter

  // Filter burgers by type
  filterBurgers(type: string) {
    this.selectedFilter = type; // Update selected filter
    if (type === 'all') {
      this.filteredBurgers = [...this.burgerList];  // Reset to show all burgers
    } else {
      this.filteredBurgers = this.burgerList.filter(burger => burger.type === type);
    }
  }

  // Toggle sorting dropdown visibility
  toggleSortDropdown() {
    this.isSortDropdownVisible = !this.isSortDropdownVisible;
  }

  // Sort burgers by price
  sortBurgers(order: string) {
    if (order === 'low-high') {
      this.filteredBurgers.sort((a, b) => a.price - b.price);
    } else if (order === 'high-low') {
      this.filteredBurgers.sort((a, b) => b.price - a.price);
    }
    this.isSortDropdownVisible = false; // Close dropdown after sorting
  }
}

