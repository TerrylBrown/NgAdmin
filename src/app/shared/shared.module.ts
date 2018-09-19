import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { RouterModule } from '@angular/router';

// Layout
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

// Compnents
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		HeaderComponent,
		SidebarComponent,
		CardComponent,
		MenuComponent
	],
	exports: [
		HeaderComponent,
		SidebarComponent,
		CardComponent
	]
})

export class SharedModule { }