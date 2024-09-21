import { Component } from '@angular/core';

@Component({
  selector: 'app-chicken-dry-items',
  templateUrl: './chicken-dry-items.component.html',
  styleUrls: ['./chicken-dry-items.component.scss']
})
export class ChickenDryItemsComponent {

  chickens = [
    { name: 'kasturi Kalmi ', price: 90 },
    { name: 'Chicken Lollipop', price: 130 },
    { name: 'Chicken Manchurian', price: 160 },
    { name: 'Chilli Chicken', price: 160 },
    { name: 'Lemon Chicken', price: 160 },
    { name: 'French Chicken', price: 160 },
    { name: 'Chicken Kebab', price: 100 },
    { name: 'Chicken 65', price: 160 },
    { name: 'Garlic Chicken', price: 150 },
    { name: 'Guntur Chicken Dry', price: 150 },
    { name: 'Chicken Hyderabadi', price: 150 },
  
  ];

}
