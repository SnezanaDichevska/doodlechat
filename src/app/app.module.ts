import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import {routing} from "./_routing/app.routing";
import {firebaseModule} from "./_initializers/firebase.initializer";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    routing,
    firebaseModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
