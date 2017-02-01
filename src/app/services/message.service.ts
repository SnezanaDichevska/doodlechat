import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Message} from "../models/message.model";

@Injectable()
export class MessageService {
  constructor(private af: AngularFire) { }

  create(msg: Message) {
    return this.af.auth.createUser(msg.serialize());
  }

}
