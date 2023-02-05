// import { SummerOutfit } from '../outfits/SummerOutfit';
import { Product } from '../Product';
import { User } from './User';
import {arr_of_products} from '../AvaialableProducts'
import { outfit } from '../outfits/outfit';

export class ProductSeller extends User {
  constructor() {
    super();
  }

  addProduct(x:any): void {
    arr_of_products.push(x);
  }
  removeProduct(x: any): void {
   var index = arr_of_products.indexOf(x);
    const del = arr_of_products.splice(index, 1);
   }
  setPrice(x: Product,y: Number): void {
    x.price = y;
  }
  setSize(x: outfit,y: string): void {
    x.size = y;
  }
  setColor(x: outfit,y: string): void {
    x.colour = y;
  }

}
