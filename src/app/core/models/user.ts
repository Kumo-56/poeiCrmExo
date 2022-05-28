import {UserI} from "../interfaces/user-i";
import {UserRole} from "../enums/user-role";

export class User implements UserI{
  id: number=0;
  email: string='';
  password: string='';
  role: UserRole =UserRole.UTILISATEUR;

  constructor(obj? :Partial<User>) {
    if (obj){
      Object.assign(this, obj);

    }
  }

}
