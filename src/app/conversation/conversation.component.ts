import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../core/services/chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit,OnDestroy {

  messages = [];
  connection;
  message;
  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
   
      this.messages.push(message);
      console.log(message)
    })
    // setTimeout(() => {
    //   this.chatService.sendMessage("salam");
    // }, 1500);
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  send(){
    this.chatService.sendMessage("test issam");
  }

}
