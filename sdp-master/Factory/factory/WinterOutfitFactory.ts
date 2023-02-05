import { Coat } from '../outfits/Coat';
import { Sweater } from '../outfits/Sweater';
import { Scarf } from '../outfits/Scarf';
import { WinterBoot } from '../outfits/WinterBoot';
import { WinterType } from '../enums/WinterType';
import { WinterOutfit } from '../outfits/WinterOutfit';

export class WinterOutfitFactory {
  getOutfit(outfitType: WinterType): WinterOutfit {
    return {
      [WinterType.COAT]: new Coat(),
      [WinterType.SWEATER]: new Sweater(),
      [WinterType.SCARF]: new Scarf(),
      [WinterType.WINTERBOOT]: new WinterBoot(),
    }[outfitType];
  }
}
