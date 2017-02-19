import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {

  }

  ngOnInit() {
  }

}
