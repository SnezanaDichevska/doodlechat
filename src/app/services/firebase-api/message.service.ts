import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Message} from "../../models/message.model";

@Injectable()
export class MessageService {
  constructor(private af: AngularFire) { }

  create(msg: Message) {
    return this.af.database.list('messages').push(msg.serialize());
  }

  getMessages(){
    // Reference to the /messages/ database path.
    let msgList = this.af.database.list("/messages");
    // Make sure we remove all previous listeners.
    let list = msgList.map((msg)=>{
      return new Message().deserialize(msg);
    });

    console.log("LIST OF MSG")
    console.log(list)

    return list;
  }
}
[' ,.']
