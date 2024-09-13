import { Component } from '@angular/core';

@Component({
  selector: 'app-shakes',
  templateUrl: './shakes.component.html',
  styleUrls: ['./shakes.component.scss']
})
export class ShakesComponent {

  selectedTab: string = 'shakes'; // Default to 'shakes' tab


  shakeList = [
    { name: 'Vanilla Shake', price: 100, description: 'A classic creamy vanilla shake made with real vanilla beans.', },
    { name: 'Chocolate Smoothie', price: 100, description: 'A rich and creamy chocolate smoothie made with real cocoa.', },
    { name: 'Oreo Shake', price: 100, description: 'A delicious shake blended with crunchy Oreo cookies.', },
    { name: 'Strawberry Smoothie', price: 100, description: 'A refreshing smoothie made with fresh strawberries.',  },
    { name: 'Red Rose Smoothie', price: 100, description: 'A unique smoothie with a hint of rose flavor.', },
    { name: 'Mango Smoothie', price: 100, description: 'A tropical smoothie made with ripe mangoes.',  },
    { name: 'Panshot Smoothie', price: 100, description: 'A refreshing smoothie with a unique blend of flavors.',  },
  ];

  sodaBaseList = [
    { name: 'Lemonade', price: 90, description: 'A tangy and refreshing lemonade, perfect for hot days.' },
    { name: 'WaterMelon Punch', price: 90, description: 'A sweet and hydrating punch made from fresh watermelon.' },
    { name: 'Green Apple Punch', price: 90, description: 'A crisp and fruity punch with a green apple flavor.' },
    { name: 'Kiwi Apple Punch', price: 90, description: 'A delightful punch combining the tang of kiwi with the sweetness of apple.' },
  ];

  iceBaseList = [
    { name: 'Cool Blue', price: 90, description: 'A cool and refreshing blue beverage with a hint of citrus.' },
    { name: 'Black Currant Blast', price: 90, description: 'A bold and fruity drink bursting with black currant flavor.' },
    { name: 'Tropical Spice Splash', price: 90, description: 'A tropical drink with a spicy twist and a blend of exotic fruits.' },
  ];
}
