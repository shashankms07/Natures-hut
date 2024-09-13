import { Component } from '@angular/core';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent {

  pizzaList = [
    // Veg Pizzas
    { 
      name: 'Margherita', 
      description: 'Cheese', 
      sizes: { regular: 120, medium: 180 }, 
      type: 'veg' 
    },
    { 
      name: 'Spicy Veggie', 
      description: 'Onion, Tomato, Chilly', 
      sizes: { regular: 150, medium: 220 }, 
      type: 'veg' 
    },
    {
      name: 'Corn Pizza',
      description: 'Sweet Corn, Cheese',
      sizes: { regular: 140, medium: 220 },
      type: 'veg'
    },
    { 
      name: 'Veggie Crunchy', 
      description: 'Onion, Capsicum, Jalapeno', 
      sizes: { regular: 160, medium: 230 }, 
      type: 'veg' 
    },
    { 
      name: 'Veggie Supreme', 
      description: 'Capsicum, Red Capsicum, Jalapeno, Black Olives, Baby Corn', 
      sizes: { regular: 170, medium: 270 }, 
      type: 'veg' 
    },
    { 
      name: 'Paneer Tikka Pizza', 
      description: 'Onion, Capsicum, Marinated Paneer, Tomato', 
      sizes: { regular: 140, medium: 220 }, 
      type: 'veg' 
    },
    { 
      name: 'Paneer Makhani', 
      description: 'Tomato, Jalapeno, Salted Paneer', 
      sizes: { regular: 170, medium: 270 }, 
      type: 'veg' 
    },
    // Non-Veg Pizzas
    { 
      name: 'Chicken Tikka Pizza', 
      description: 'Onion, Capsicum, Baby Corn', 
      sizes: { regular: 230, medium: 420 }, 
      type: 'non-veg' 
    },
    { 
      name: 'Chicken Pepperoni', 
      description: 'Onion', 
      sizes: { regular: 230, medium: 420 }, 
      type: 'non-veg' 
    },
    { 
      name: 'Chicken Savage', 
      description: 'Onion, Jalapeno, Baby Corn', 
      sizes: { regular: 230, medium: 420 }, 
      type: 'non-veg' 
    },
    { 
      name: 'Chicken Nugget', 
      description: 'Spicy Chicken Nuggets', 
      sizes: { regular: 230, medium: 420 }, 
      type: 'non-veg' 
    },
    { 
      name: 'Chicken Supreme', 
      description: 'Onion, Capsicum, Baby Corn, Black Olives', 
      sizes: { regular: 230, medium: 420 }, 
      type: 'non-veg' 
    }
  ];

  filteredPizzas = [...this.pizzaList];
  isSortDropdownVisible = false;
  selectedFilter: string = 'all'; // Default filter

  // Filter pizzas by type
  filterPizzas(type: string) {
    this.selectedFilter = type; // Update selected filter
    if (type === 'all') {
      this.filteredPizzas = [...this.pizzaList];  // Reset to show all pizzas
    } else {
      this.filteredPizzas = this.pizzaList.filter(pizza => pizza.type === type);
    }
  }

  // Toggle sorting dropdown visibility
  toggleSortDropdown() {
    this.isSortDropdownVisible = !this.isSortDropdownVisible;
  }

  // Sort pizzas by price
  sortPizzas(order: string) {
    if (order === 'low-high') {
      this.filteredPizzas.sort((a, b) => a.sizes.regular - b.sizes.regular);
    } else if (order === 'high-low') {
      this.filteredPizzas.sort((a, b) => b.sizes.regular - a.sizes.regular);
    }
    this.isSortDropdownVisible = false; // Close dropdown after sorting
  }

}
