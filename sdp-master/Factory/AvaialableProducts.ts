import { Bagel } from './groceries/Bagel';
import { Butter } from './groceries/Butter';
import { Cereal } from './groceries/Cereal';
import { Cheese } from './groceries/Cheese';
import { Coffee } from './groceries/Coffee';
import { IndividualMeal } from './groceries/IndividualMeal';
import { DinnerRoll } from './groceries/DinnerRoll';
import { Eggs } from './groceries/Eggs';
import { Flour } from './groceries/Flour';
import { Icecream } from './groceries/Icecream';
import { Juice } from './groceries/Juice';
import { Ketchup } from './groceries/Ketchup';
import { Meat } from './groceries/Meat';
import { Milk } from './groceries/Milk';
import { Mixes } from './groceries/Mixes';
import { Pasta } from './groceries/Pasta';
import { SandwichLoav } from './groceries/SandwichLoav';
import { Soda } from './groceries/Soda';
import { SpaghetiSauce } from './groceries/SpaghetiSauce';
import { Sugar } from './groceries/Sugar';
import { Tea } from './groceries/Tea';
import { Tortilla } from './groceries/Tortilla';
import { Vegetables } from './groceries/Vegetables';
import { Waffle } from './groceries/Waffle';
import { Yogurt } from './groceries/Yogurt';
import { Coat } from './outfits/Coat';
import { Scarf } from './outfits/Scarf';
import { Short } from './outfits/Short';
import { Slipper } from './outfits/Slipper';
import { Sweater } from './outfits/Sweater';
import { Tshirt } from './outfits/Tshirt';
import { WinterBoot } from './outfits/WinterBoot';
import { Product } from './Product';
import { Hammer } from './tools/handtools/Hammer';
import { HandSaw } from './tools/handtools/HandSaw';
import { Plier } from './tools/handtools/Plier';
import { ScrewDriver } from './tools/handtools/ScrewDriver';
import { Saw } from './tools/powertools/Saw';
import { Drill } from './tools/powertools/Drill';
import { ImpactDriver } from './tools/powertools/ImpactDriver';
import { ImpactWrench } from './tools/powertools/ImpactWrench';
import { Sander } from './tools/powertools/Sander';
import { WinterType } from './enums/WinterType';
import { WinterOutfit } from './outfits/WinterOutfit';
import { WinterOutfitFactory } from './factory/WinterOutfitFactory';
//test
const winterOutfitFactory = new WinterOutfitFactory();
const coat: WinterOutfit = winterOutfitFactory.getOutfit(WinterType.COAT);
export let arr_of_products = [
    coat,
//   Short,
//   Scarf,
//   Slipper,
//   Sweater,
//   Tshirt,
//   WinterBoot,
//   Hammer,
//   HandSaw,
//   Plier,
//   ScrewDriver,
//   Drill,
//   ImpactDriver,
//   ImpactWrench,
//   Sander,
//   Saw,
//   Bagel,
//   Butter,
//   Cereal,
//   Cheese,
//   Coffee,
//   DinnerRoll,
//   Eggs,
//   Flour,
//   Icecream,
//   IndividualMeal,
//   Juice,
//   Ketchup,
//   Meat,
//   Milk,
//   Mixes,
//   Pasta,
//   SandwichLoav,
//   Soda,
//   SpaghetiSauce,
//   Sugar,
//   Tea,
//   Tortilla,
//   Vegetables,
//   Waffle,
//   Yogurt,
];
