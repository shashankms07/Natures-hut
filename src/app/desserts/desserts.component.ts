import { Component } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent {

  selectedTab: string = 'iceCream'; // Default to 'iceCream' tab

  dessertList = [
    { name: 'Dry Fruit Gulcon', singleScoop: 60, tscoop: 130, description: 'A delightful mix of dry fruits.' },
    { name: 'Vanilla', singleScoop: 60, tscoop: 130, description: 'Delicious vanilla ice cream.' },
    { name: 'Chocolate', singleScoop: 60, tscoop: 140, description: 'Rich chocolate ice cream.' },
    { name: 'Strawberry', singleScoop: 60, tscoop: 140, description: 'Refreshing strawberry ice cream.' },
    { name: 'DBC', singleScoop: 80, tscoop: 180, description: 'Delicious DBC (Death By Chocolate) ice cream.' },
    { name: 'Black Currant', singleScoop: 60, tscoop: 140, description: 'Flavorful black currant ice cream.' },
    { name: 'Pineapple', singleScoop: 60, tscoop: 140, description: 'Tropical pineapple ice cream.' },
    { name: 'Mango', singleScoop: 60, tscoop: 140, description: 'Sweet mango ice cream.' },
    { name: 'Orange', singleScoop: 60, tscoop: 140, description: 'Citrusy orange ice cream.' },
    { name: 'Butter Scotch', singleScoop: 60, tscoop: 140, description: 'Rich butter scotch ice cream.' },
  ];

  cakeList = [
    { name: 'Chocolate Cake', price: 90, description: 'A rich chocolate cake with layers of creamy frosting.' },
    { name: 'Vanilla Cup Cake', price: 80, description: 'A classic vanilla cake with a light and fluffy texture.' },
    { name: 'Chocolate Brownie', price: 80, description: 'Decadent chocolate brownie with chunks of chocolate and a fudgy texture.' },
    { name: 'Donuts', price: 60, description: 'Soft and fluffy donuts coated with a sweet glaze.' },
   
    // Add more cakes as needed
  ];
}
