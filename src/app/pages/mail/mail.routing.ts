import { Routes, RouterModule } from '@angular/router';

// components
import { MailComponent } from './mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { SavedComponent } from './saved/saved.component';
import { TrashComponent } from './trash/trash.component';

const childRoutes: Routes = [
	{
		path: '',
		component: MailComponent,
		children: [
			{ path: '', redirectTo: 'inbox', pathMatch: 'full'},
			{ path: 'inbox', component: InboxComponent },
			{ path: 'saved', component: SavedComponent },
			{ path: 'trash', component: TrashComponent }
		]
	}
];

export const routing = RouterModule.forChild(childRoutes);