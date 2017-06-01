import {Deserialization} from "./shared/deserialization.basemodel";
import {autoserialize, autoserializeAs} from "cerialize";
import {UserStorageService} from "../services/local-storage/user-storage.service";
export class User extends Deserialization {

  @autoserializeAs('displayName') name: string;
  @autoserializeAs('photoUrl') photoUrl: string;
  @autoserialize email: string;
  @autoserialize password: string;
  @autoserialize uid:string;

  constructor(email?: string, password?: string, name?: string, photoUrl?: string ) {
    super();
    if (email) this.email = email;
    if (password) this.password = password;
    if (name) this.name = name;
    if (photoUrl) this.photoUrl = photoUrl;
  }

}
