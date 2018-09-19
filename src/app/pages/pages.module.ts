import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '../shared/shared.module';
import { routing } from './pages.routing';

// Components
import { PagesComponent } from './pages.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		routing
	],
	declarations: [
		PagesComponent,
	]
})

export class PagesModule { }