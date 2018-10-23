import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  items:any;
  constructor(private db: AngularFirestore) {
    // this.items= this.db.collection('user');
    // this.db.collection('user').add({userName:'kttss',email:'issam@gmail.com',firstName:'kattouss',lastName:'issam',password:'123'});
    console.log( this.items)
     this.db.collection<any>('user').valueChanges().subscribe(data=>{
     console.log('rrr',data);
    });  

   }

  ngOnInit() {
  }

}
