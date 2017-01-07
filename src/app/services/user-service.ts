import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";

@Injectable()
export class UserService {
  constructor(private af: AngularFire) { }

  create(user: any) {
    return this.af.auth.createUser(user);
  }

}
