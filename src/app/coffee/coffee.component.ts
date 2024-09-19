import { Component } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent {

  coffees: any[] = [];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.StartersRolls();
  }

  StartersRolls(): void {
    this.coffeeService.getCoffee().subscribe(data => {
      this.coffees = data;
    }, error => {
      console.error('Error fetching pizzas: ', error);
    });
  }
 

}
