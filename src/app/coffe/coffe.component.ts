import { Component } from '@angular/core';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.scss']
})
export class CoffeComponent {

  hotBeverageList = [
    { name: 'Cappuccino', price: 80, description: 'A rich and creamy espresso-based coffee with frothed milk.' },
    { name: 'Coffee Latte', price: 90, description: 'Smooth espresso combined with steamed milk, perfect for any time of day.' },
    { name: 'Coffee Mocha', price: 110, description: 'A delicious blend of espresso, chocolate, and steamed milk.' },
    { name: 'Coffee America', price: 90, description: 'A strong, bold black coffee made by diluting espresso with hot water.' },
    { name: 'Irish Cappuccino', price: 110, description: 'A cappuccino with a hint of Irish cream flavor, for a special treat.' },
    { name: 'Hazelnut Cappuccino', price: 110, description: 'A creamy cappuccino infused with the sweet and nutty flavor of hazelnut.' },
    { name: 'Vanilla Cappuccino', price: 110, description: 'A cappuccino flavored with a dash of vanilla for a smooth and sweet finish.' },
    { name: 'Caramel Cappuccino', price: 110, description: 'A delightful cappuccino with a rich caramel twist for sweetness.' }
];

}
