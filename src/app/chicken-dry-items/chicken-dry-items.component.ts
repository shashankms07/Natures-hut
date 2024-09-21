import { Component } from '@angular/core';

@Component({
  selector: 'app-chicken-dry-items',
  templateUrl: './chicken-dry-items.component.html',
  styleUrls: ['./chicken-dry-items.component.scss']
})
export class ChickenDryItemsComponent {

  chickens = [
    { name: 'kasturi Kalmi ', price: 90 },
    { name: 'Chicken Lollipop', price: 100 },
    { name: 'Chicken Manchurian', price: 130 },
    { name: 'Chilli Chicken', price: 130 },
    { name: 'Lemon Chicken', price: 130 },
    { name: 'French Chicken', price: 130 },
    { name: 'Chicken Kebab', price: 130 },
    { name: 'Chicken 65', price: 130 },
    { name: 'Garlic Chicken', price: 130 },
    { name: 'Guntur Chicken Dry', price: 130 },
    { name: 'Chicken Hyderabadi', price: 140 },
    { name: 'Hyderabadi Kebab', price: 140 },
    
    
  ];

}
