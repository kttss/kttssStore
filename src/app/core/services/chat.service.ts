import { Injectable } from '@angular/core'; 

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://192.168.0.251:5000';   
  socket;


  constructor() { 
    this.socket = io.connect(this.url);
  }

  sendMessage(message){
    this.socket.emit('add-message', message);    
  }

  getMessages() {
    let observable = new Observable(observer => { 
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;


    // return Observable.create(observer => {
    //   this.socket.on('message', msg => {
    //     observer.next(msg);
    //   });
    // });
  }
}
