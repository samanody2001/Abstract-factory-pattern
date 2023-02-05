import { PowertoolType } from "../enums/PowertoolType";
import { Powertool } from '../tools/powertools/Powertool';
import { Drill } from '../tools/powertools/Drill';
import { ImpactDriver } from '../tools/powertools/ImpactDriver';
import { ImpactWrench } from '../tools/powertools/ImpactWrench';
import { Sander } from '../tools/powertools/Sander';
import { Saw } from '../tools/powertools/Saw';
export class PowertoolFactory {
  getPowertool(powertooltype: PowertoolType): Powertool {
    return {
      [PowertoolType.DRILL]: new Drill(),
      [PowertoolType.IMPACTDRIVER]: new ImpactDriver(),
      [PowertoolType.IMPACTWRENCH]: new ImpactWrench(),
      [PowertoolType.SANDER]: new Sander(),
      [PowertoolType.SAW]: new Saw(),
    }[powertooltype];
  }
}
