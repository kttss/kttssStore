import { Component, OnInit } from '@angular/core';

import { UserService } from './core';
import { PusherService } from './core/services/pusher.service';


import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[` 
 
`]
})
export class AppComponent implements OnInit {

  user:string;
  logged :boolean = false;
  messages :Array<any>=[];
  message:string;

  countmsg:number = 0;
  constructor (
    private userService: UserService,
    private pusherService : PusherService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.userService.populate();
if(localStorage.getItem('user')){
  this.logged=true;
  this.user = localStorage.getItem('user');
}
    this.pusherService.channel.bind('my-event', data => {
      console.log(data)
      if(this.user !=data.user)
      this.countmsg++;
     this.messages.push({user: data.user,msg:data.msg});
     this.titleService.setTitle(  "EXpertis "+this.countmsg );
     // this.likes = data.likes ;
    });
  }

  next(){
    localStorage.setItem('user',this.user);
    this.logged=true;
  }

  send(){ 
  this.pusherService.send({user:this.user,msg:this.message}).subscribe(data=>{})
  this.message = '';
  }
}
