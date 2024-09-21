import { Component } from '@angular/core';

@Component({
  selector: 'app-tandoori-dry-items',
  templateUrl: './tandoori-dry-items.component.html',
  styleUrls: ['./tandoori-dry-items.component.scss']
})
export class TandooriDryItemsComponent {

  tandooris = [
    { name: 'Paneer Tikka ', price: 160 },
    { name: 'Chicken Tikka', price: 160 },
    { name: 'Tandoori Kalmi', price: 80 },
    { name: 'Tandoori Chicken', price: 400 },
    { name: 'Tandoori Chicken (half)', price: 230 },
    
  ];

}
