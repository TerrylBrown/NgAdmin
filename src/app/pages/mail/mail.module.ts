import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MailService } from './mail.service';
import { routing } from './mail.routing';

import { SharedModule } from '../../shared/shared.module';

// components
import { MailComponent } from './mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { SavedComponent } from './saved/saved.component';
import { TrashComponent } from './trash/trash.component';
import { ListComponent } from './list/list.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		SharedModule,
		routing
	],
	declarations: [
		MailComponent,
		InboxComponent,
		SavedComponent,
		TrashComponent,
		ListComponent
	],
	providers: [
    { provide: 'mailService', useClass: MailService }
  ]
})	
export class MailModule { }