import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseComponent } from './firebase.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component:FirebaseComponent }
     ])
  ],
  declarations: [FirebaseComponent]
})
export class FirebaseModule { }
