import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ConversationModule } from './conversation/conversation.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseModule } from './firebase/firebase.module';
import { AngularFirestore } from '@angular/fire/firestore';

const config = {
  apiKey: "AIzaSyD6FYLz8Xf-17uZbHBWZs82ZSFCxGl4eCI",
  authDomain: "ktts-store.firebaseapp.com",
  databaseURL: "https://ktts-store.firebaseio.com",
  storageBucket: "ktts-store.appspot.com",
  messagingSenderId: "129832800457",
  projectId:"ktts-store"
};
@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    ConversationModule,
    AngularFireModule.initializeApp(config,'ktts-store'),
    AngularFireDatabaseModule,
    FirebaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
