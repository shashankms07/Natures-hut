import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza1',
  templateUrl: './pizza1.component.html',
  styleUrls: ['./pizza1.component.scss']
})
export class Pizza1Component {

   pizzas: any[] = [];
    filteredPizzas: any[] = [];
    selectedTab: string = 'All';
    cart: any[] = [];
  
    constructor(private pizzaService: PizzaService) {}
  
    ngOnInit(): void {
      this.loadPizzas();
    }
  
    loadPizzas(): void {
      this.pizzaService.getPizzas().subscribe(data => {
        this.pizzas = data;
        this.filterPizzas();
      }, error => {
        console.error('Error fetching pizzas: ', error);
      });
    }
  
    selectTab(tab: string): void {
      this.selectedTab = tab;
      this.filterPizzas();
    }
  
    filterPizzas(): void {
      if (this.selectedTab === 'All') {
        this.filteredPizzas = this.pizzas;
      } else {
        this.filteredPizzas = this.pizzas.filter(
          pizza => pizza.type === this.selectedTab
        );
      }
    }

    addToCart(pizza: any): void {
      // Retrieve the current cart from localStorage or initialize an empty array
      const storedCart = localStorage.getItem('cart');
      this.cart = storedCart ? JSON.parse(storedCart) : [];
    
      // Add the new pizza to the cart
      this.cart.push(pizza);
    
      // Save the updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(this.cart));
    
      // Optional: Show a confirmation message
      alert(`${pizza.name} added to cart!`);
    }

}
