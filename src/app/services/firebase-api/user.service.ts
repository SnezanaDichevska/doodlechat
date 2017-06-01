import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {User} from "../../models/user.model";

@Injectable()
export class UserService {
  constructor(private af: AngularFire) { }

  create(user: User) {
   return this.af.auth.createUser(user.serialize());
  }

}
