import { Product } from '../Product';
import { arr_of_products } from '../AvaialableProducts';
import { outfit } from '../outfits/outfit';

export class User {
  name?: string;
  productCataloge?: string[];

  constructor() {
    this.productCataloge = [
      'Coats',
      'Shorts',
      'Scarf',
      'Slipper',
      'Sweater',
      'Tshirt',
      'WinterBoot',
      'Hammer',
      'HandSaw',
      'Plier',
      'ScrewDriver',
      'Drill',
      'ImpactDriver',
      'ImpactWrench',
      'Sander',
      'Saw',
      'Bagel',
      'Butter',
      'Cereal',
      'Cheese',
      'Coffee',
      'DinnerRoll',
      'Eggs',
      'Flour',
      'Icecream',
      'IndividualMeaL',
      'Juice',
      'Ketchup',
      'Meat',
      'Milk',
      'Mixes',
      'Pasta',
      'SandwichLoav',
      'Soda',
      'SpaghetiSauce',
      'Sugar',
      'Tea',
      'Tortilla',
      'Vegetables',
      'Waffle',
      'Yogurt',
    ];
  }
  setName(x: string): void {
    this.name = x;
  }
  getName(): void {
    console.log(this.name);
  }
  getSize(x: outfit): void {
    console.log(x.size);
  }
  getColor(x: outfit): void {
    console.log(x.colour);
  }
  getPrice(x: Product): void {
    console.log(x.price);
  }
  viewProductCatalog(): void {
    console.log(this.productCataloge);
  }
  viewAvailableProducts(): void {
    console.log(arr_of_products);
  }
  getProductRate(x: Product) {
    x.rating;
  }
}
