import { Component } from '@angular/core';

@Component({
  selector: 'app-tandoori-dry-items',
  templateUrl: './tandoori-dry-items.component.html',
  styleUrls: ['./tandoori-dry-items.component.scss']
})
export class TandooriDryItemsComponent {

  tandooris = [
    { name: 'Paneer Tikka ', price: 130 },
    { name: 'Chicken Tikka', price: 170 },
    { name: 'Tandoori Kalmi', price: 180 },
    { name: 'Tandoori Chicken Kebab', price: 180 },
    { name: 'Tandoori Chicken (half)', price: 180 },
    
  ];

}
