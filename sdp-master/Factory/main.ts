import { SummerOutfitFactory } from './factory/SummerOutfitFactory';
import { WinterOutfitFactory } from './factory/WinterOutfitFactory';
import { WinterType } from './enums/WinterType';
import { SummerType } from './enums/SummerType';
import { SummerOutfit } from './outfits/SummerOutfit';
import { WinterOutfit } from './outfits/WinterOutfit';
import { Customer } from './Users/Customer';
import { HandtoolFactory } from './factory/HandtoolFactory';
import { HandtoolType } from './enums/HandtoolType';
import { Handtool } from './tools/handtools/Handtool';
import { GrocerieFactory } from './factory/GrocerieFactory';
import { GrocerieType } from './enums/GrocerieType';
import { Grocerie } from './groceries/Grocerie';
import { ProductSeller } from './Users/ProductSeller';
import { arr_of_products } from './AvaialableProducts';
import { CustomerRep } from './Users/CustomerRep';

// import { FactoryOrchestrator } from './factory/FactoryOrchestrator';
// import { FactoryType } from './enums/FactoryType';

class FactoryDemo {
  main() {
    // create instance of factory
    // const factoryProducer = new FactoryOrchestrator();
    const winterOutfitFactory = new WinterOutfitFactory();
    const summerOutfitFactory = new SummerOutfitFactory();
    const handtoolFactory = new HandtoolFactory();
    const grocerieFactory = new GrocerieFactory();
    const customer1 = new Customer();
    const customerrep = new CustomerRep();
    customer1.setName('Youssef');
    customer1.getName();
    const productseller = new ProductSeller();

    // create coat and tshirt using factory
    const coat: WinterOutfit = winterOutfitFactory.getOutfit(WinterType.COAT);
    const tshirt: SummerOutfit = summerOutfitFactory.getOutfit(
      SummerType.TSHIRT
    );
    const hammer: Handtool = handtoolFactory.getHandtool(HandtoolType.HAMMER);
    const Bagel: Grocerie = grocerieFactory.getGrocerie(GrocerieType.BAGEL);
    productseller.setPrice(tshirt, 50);
    customer1.addtocart(tshirt);
    customer1.ViewCart();
    customer1.getPrice(tshirt);
    customer1.deletefromcart(tshirt);
    customer1.ViewCart();
    productseller.addProduct(coat);
    customer1.viewAvailableProducts();
    productseller.removeProduct(coat);
    customer1.viewAvailableProducts();
    customer1.fireComplain("Second complain");
    customerrep.viewComplains();





    // type
    console.log('Json type is: ' + typeof arr_of_products);
  }
}

FactoryDemo.prototype.main();
