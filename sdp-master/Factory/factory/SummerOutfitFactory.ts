import { Tshirt } from '../outfits/Tshirt';
import { Slipper } from '../outfits/Slipper';
import { Short } from '../outfits/Short';
import { SummerType } from "../enums/SummerType";
import { SummerOutfit } from '../outfits/SummerOutfit';
export class SummerOutfitFactory {
  getOutfit(outfitType: SummerType): SummerOutfit {
    return {
      [SummerType.TSHIRT]: new Tshirt(),
      [SummerType.SLIPPER]: new Slipper(),
      [SummerType.SHORT]: new Short(),
    }[outfitType];
  }
}
