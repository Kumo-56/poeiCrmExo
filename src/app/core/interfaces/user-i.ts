import {UserRole} from "../enums/user-role";

export interface UserI {
  "id": number;
  "email": string;
  "password": string;
  "role": UserRole;
}
