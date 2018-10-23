// declare const Pusher: any;
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js'

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;
  channel: any;
  constructor(private http: HttpClient) {

    this.pusher = new Pusher('dc5bb5afa97d05ccd08a', { cluster: 'eu', forceTLS: true});

    this.channel = this.pusher.subscribe('my-channel');
   }

   send(message){
     return this.http.post('http://192.168.0.251:3000/send', message)
   }
}
