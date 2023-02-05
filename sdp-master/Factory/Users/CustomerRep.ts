
import { arr_of_complains } from '../CustomerComplains';
import { User } from './User';



export class CustomerRep extends User {

  constructor() {
    super();
  }
  viewComplains(): void {
    console.log(arr_of_complains);
    }

}
