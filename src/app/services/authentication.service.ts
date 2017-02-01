import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {User} from "../models/user.model";

//https://github.com/angular/angularfire2/blob/master/docs/5-user-authentication.md

@Injectable()
export class AuthenticationService {
  constructor(private af: AngularFire) {
  }

  login(user: User) {

    return this.af.auth.login(user.serialize(),
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then((response:any) => {
      console.log("USer LOGIN")
      console.log(response)
      let user = new User().deserialize(response);
      console.log(user);
      localStorage.setItem('currentUser', user);
    });
  }

  logout() {
    // remove user from local storage to log user out
    this.af.auth.logout();
    console.log("User LOGOUT")
    localStorage.removeItem('currentUser');
  }
}
