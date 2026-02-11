import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  pizzas: any[] = [];
  filteredPizzas: any[] = [];
  selectedTab: string = 'All';
  loadingPizzas = true;   // added

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.loadPizzas();
  }

  loadPizzas(): void {
    this.loadingPizzas = true;   // start loader

    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzas = data;
      this.filterPizzas();
      this.loadingPizzas = false;   // stop loader
    }, error => {
      console.error('Error fetching pizzas: ', error);
      this.loadingPizzas = false;   // stop loader on error
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
}
