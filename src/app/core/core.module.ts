import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './settings.service'
import { UsersService } from './users.service';
import { MessageService } from './message.service';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [],
	providers:[
		SettingsService,
		UsersService
	]
})
export class CoreModule { }
