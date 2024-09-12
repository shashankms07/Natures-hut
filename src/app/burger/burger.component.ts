import { Component } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {


  burgerList = [
    {
      name: 'Classic  Burger',
      price: 150,
      description: 'A juicy  patty topped with fresh lettuce, tomato,  patty topped with fresh lettuce, tomato, patty topped with fresh lettuce, tomato, cheese, and our special sauce.',
      imageUrl: 'assets/images/th.jpeg'
    },
    {
      name: 'Chicken Zinger Burger',
      price: 130,
      description: 'Crispy chicken fillet with a spicy kick, served with lettuce and mayo on a sesame bun.',
      imageUrl: 'assets/images/th.jpeg'
    },
    {
      name: 'Veggie Delight Burger',
      price: 100,
      description: 'A delicious veggie patty topped with cheese, lettuce, and tomato, served with tangy sauce.',
       imageUrl: 'assets/images/th.jpeg'
    },
    {
      name: 'Veggie Delight Burger',
      price: 100,
      description: 'A delicious veggie patty topped with cheese.',
       imageUrl: 'assets/images/th.jpeg'
    }

  ];
}
imageUrl: 'assets/images/th.jpeg'
