import { Product } from '../Product';
import { arr_of_products } from '../AvaialableProducts';
import { User } from './User';
import { arr_of_complains } from '../CustomerComplains';
const fs = require('fs');
export class Customer extends User {
  cart: Product[];

  constructor() {
    super();
    this.cart = [];
  }
  ViewCart(): void {
    console.log(this.cart);
  }
  buy(): void {
    console.log('Thank you for buying from us!');
    console.log('You bought everythins in your cart');
  }
  addtocart(x: Product): void {
    this.cart.push(x);
  }
  deletefromcart(x: Product): void {
    var index = this.cart.indexOf(x);
    const del = this.cart.splice(index, 1);
  }

  fireComplain(x: any): void {
    arr_of_complains.push(x);
  }
  rateProduct(x: Product,y: Number){
    x.rating=y;
  }
}
