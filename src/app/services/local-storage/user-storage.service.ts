import {User} from "../../models/user.model";
import {isNullOrUndefined} from "util";
import {Injectable} from "@angular/core";

@Injectable()
export class UserStorageService{
  private userKey:string = "currentUser";

  saveUser(user:User):void{
    localStorage.setItem(this.userKey, JSON.stringify(user.serialize()));
  }

  removeCurrentUser():void{
    localStorage.removeItem(this.userKey);
  }

  getCurrentUser():User{
    let json = JSON.parse(this.loadUser());
    return new User().deserialize(json);
  }

  hasAny():boolean{
    return !isNullOrUndefined(this.loadUser());
  }

  private loadUser(){
   return localStorage.getItem(this.userKey);
  }
}
