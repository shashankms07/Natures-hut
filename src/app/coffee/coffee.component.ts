import { Component } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent {

  coffees: any[] = [];
  loadingCoffee: boolean = true;   // spinner variable

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.StartersRolls();
  }

  StartersRolls(): void {
    this.loadingCoffee = true;

    this.coffeeService.getCoffee().subscribe(data => {
      this.coffees = data;
      this.loadingCoffee = false;  // stop spinner
    }, error => {
      console.error('Error fetching coffees: ', error);
      this.loadingCoffee = false;
    });
  }
}
