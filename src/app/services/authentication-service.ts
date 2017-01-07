import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";

//https://github.com/angular/angularfire2/blob/master/docs/5-user-authentication.md

@Injectable()
export class AuthenticationService {
  constructor(private af: AngularFire) {
  }

  login(email: string, password: string) {

    return this.af.auth.login(
      {
        email: email,
        password: password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then((user) => {
      console.log("USer LOGIN")
      console.log(user)
      // let user = response.json();
      // localStorage.setItem('currentUser', JSON.stringify(user));
    }, (error) => {
      console.log(error)
    });
  }

  logout() {
    // remove user from local storage to log user out
    this.af.auth.logout();
    console.log("User LOGOUT")
    localStorage.removeItem('currentUser');
  }
}
