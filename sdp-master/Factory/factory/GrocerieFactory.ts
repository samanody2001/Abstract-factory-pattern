import { GrocerieType } from '../enums/GrocerieType';
import { Grocerie } from '../groceries/Grocerie';
import { Bagel } from '../groceries/Bagel';
import { Butter } from '../groceries/Butter';
import { Cereal } from '../groceries/Cereal';
import { Cheese } from '../groceries/Cheese';
import { Coffee } from '../groceries/Coffee';
import { DinnerRoll } from '../groceries/DinnerRoll';
import { Eggs } from '../groceries/Eggs';
import { Flour } from '../groceries/Flour';
import { Icecream } from '../groceries/Icecream';
import { IndividualMeal } from '../groceries/IndividualMeal';
import { Juice } from '../groceries/Juice';
import { Ketchup } from '../groceries/Ketchup';
import { Meat } from '../groceries/Meat';
import { Milk } from '../groceries/Milk';
import { Mixes } from '../groceries/Mixes';
import { Pasta } from '../groceries/Pasta';
import { SandwichLoav } from '../groceries/SandwichLoav';
import { Soda } from '../groceries/Soda';
import { SpaghetiSauce } from '../groceries/SpaghetiSauce';
import { Sugar } from '../groceries/Sugar';
import { Tea } from '../groceries/Tea';
import { Tortilla } from '../groceries/Tortilla';
import { Vegetables } from '../groceries/Vegetables';
import { Waffle } from '../groceries/Waffle';
import { Yogurt } from '../groceries/Yogurt';
// import { AbstractFactory } from './AbstractFactory';

export class GrocerieFactory  {
  getGrocerie(grocerieType: GrocerieType): Grocerie {
    return {
      [GrocerieType.BAGEL]: new Bagel(),
      [GrocerieType.BUTTER]: new Butter(),
      [GrocerieType.CEREAL]: new Cereal(),
      [GrocerieType.CHEESES]: new Cheese(),
      [GrocerieType.COFFEE]: new Coffee(),
      [GrocerieType.DINNERROLL]: new DinnerRoll(),
      [GrocerieType.EGGS]: new Eggs(),
      [GrocerieType.FLOUR]: new Flour(),
      [GrocerieType.ICECREAM]: new Icecream(),
      [GrocerieType.INDIVIDUALMEAL]: new IndividualMeal(),
      [GrocerieType.JUICE]: new Juice(),
      [GrocerieType.KETCHUP]: new Ketchup(),
      [GrocerieType.MILK]: new Milk(),
      [GrocerieType.MIXES]: new Mixes(),
      [GrocerieType.PASTA]: new Pasta(),
      [GrocerieType.SANDWICHLOAV]: new SandwichLoav(),
      [GrocerieType.SODA]: new Soda(),
      [GrocerieType.SPAGHETISAUCE]: new SpaghetiSauce(),
      [GrocerieType.SUGAR]: new Sugar(),
      [GrocerieType.TEA]: new Tea(),
      [GrocerieType.TORTILLA]: new Tortilla(),
      [GrocerieType.VEGETABLES]: new Vegetables(),
      [GrocerieType.WAFFLE]: new Waffle(),
      [GrocerieType.YOGURT]: new Yogurt(),
      [GrocerieType.MEAT]: new Meat(),
    }[grocerieType];
  }
}
