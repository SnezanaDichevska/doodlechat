import {Component, OnInit, ViewChild} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {MessageService} from "../../services/message.service";
import {Message} from "../../models/message.model";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
  providers:[MessageService,AngularFire]
})
export class ChatComponent implements OnInit {

  @ViewChild("msg") msg;
  items: Observable<any[]>;

  constructor(private af: AngularFire, private msgService: MessageService) {

  }

  ngOnInit() {
    this.items = this.msgService.getMessages();
  }

  sendMsg(msg: string){
    let currUser =   new User();
    currUser.loadFromStorage();

    console.log("Msg from user: ")
    console.log(currUser)
    let newMsg = new Message(currUser.name, msg);
    console.log(newMsg)
    this.msgService.create(newMsg);
  }

}
