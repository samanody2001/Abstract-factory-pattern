import { HandtoolType } from "../enums/HandtoolType";
import { Handtool } from '../tools/handtools/Handtool';
import { Hammer } from '../tools/handtools/Hammer';
import { HandSaw } from '../tools/handtools/HandSaw';
import { Plier } from '../tools/handtools/Plier';
import { ScrewDriver } from '../tools/handtools/ScrewDriver';

export class HandtoolFactory {
  getHandtool(handtooltype: HandtoolType): Handtool {
    return {
      [HandtoolType.HAMMER]: new Hammer(),
      [HandtoolType.HANDSAW]: new HandSaw(),
      [HandtoolType.PLIER]: new Plier(),
      [HandtoolType.SCREWDRIVER]: new ScrewDriver(),
    }[handtooltype];
  }
}
