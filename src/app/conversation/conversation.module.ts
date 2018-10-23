import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation.component';

import { RouterModule } from '@angular/router';
import { ChatService } from '../core/services/chat.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
     { path: '', component:ConversationComponent }
    ])
  ],
  declarations: [ConversationComponent],
  providers:[ChatService]
})
export class ConversationModule { }
