import {Deserialization} from "./shared/deserialization.basemodel";
import {autoserialize, deserialize} from "cerialize";
export class User extends Deserialization {

  @autoserialize email: string;
  @autoserialize password: string;
  @deserialize uid:string;

  constructor(email?: string, password?: string) {
    super();
    if (email) this.email = email;
    if (password) this.password = password;
  }
}
