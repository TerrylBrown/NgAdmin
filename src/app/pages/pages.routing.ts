import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

export const childRoutes: Routes = [
	{
		path: 'pages',
		component: PagesComponent,		
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{ path: 'dashboard',  loadChildren: './dashboard/dashboard.module#DashboardModule' },
			{ path: 'mail',  loadChildren: './mail/mail.module#MailModule' },
		]
	}
];

export const routing = RouterModule.forChild(childRoutes);