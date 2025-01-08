import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {

  cart: any[] = [];
  showPopup: boolean = false;
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.regularPrice, 0); // Adjust for price type
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  openPopup(): void {
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  placeOrder(): void {
    if (this.orderForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const formData = this.orderForm.value;
    let orderDetails = `Hello, I would like to place an order:\n\n`;

    this.cart.forEach((item, index) => {
      orderDetails += `${index + 1}. ${item.name} - Rs ${item.regularPrice}\n`;
    });

    const totalPrice = this.getTotalPrice();
    orderDetails += `\nTotal: Rs ${totalPrice}`;
    orderDetails += `\n\nCustomer Details:\nName: ${formData.name}\nMobile: ${formData.mobile}\nAddress: ${formData.address}`;

    const encodedMessage = encodeURIComponent(orderDetails);
    const phoneNumber = '7760147504'; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Clear cart and localStorage after order
    localStorage.removeItem('cart');
    this.cart = [];

    this.closePopup();
  }
}
