import { Component } from '@angular/core';

@Component({
  selector: 'app-fish-items',
  templateUrl: './fish-items.component.html',
  styleUrls: ['./fish-items.component.scss']
})
export class FishItemsComponent {

  fishes = [
    { name: 'Fish Chilli', price: 160 },
    { name: 'Fish Manchurian', price: 160 },
    { name: 'Fish Gee Roast', price: 200 },
    { name: 'Prawns Chilli', price: 190 },
    { name: 'Prawns Manchurian', price: 190 },
    { name: 'Prawns Gee Roast', price: 220 },
   
  
  ];


}
