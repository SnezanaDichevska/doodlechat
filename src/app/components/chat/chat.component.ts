import {Component, OnInit, ViewChild} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {MessageService} from "../../services/firebase-api/message.service";
import {Message} from "../../models/message.model";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {UserStorageService} from "../../services/local-storage/user-storage.service";

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css'],
  providers:[MessageService, AngularFire, UserStorageService]
})
export class ChatComponent implements OnInit {

  @ViewChild("msg") msg;
  items: Observable<any[]>;

  constructor(private af: AngularFire,
              private msgService: MessageService,
              private userStorage:UserStorageService) {

  }

  ngOnInit() {
    this.items = this.msgService.getMessages();
  }

  sendMsg(msg: string){
    let currUser = this.userStorage.getCurrentUser();

    console.log("Msg from user: ")
    console.log(currUser)
    let newMsg = new Message(currUser.name, msg);
    console.log(newMsg)
    this.msgService.create(newMsg);
  }

}
