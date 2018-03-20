import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { SettingsComponent } from './settings/settings.component';
import { routing } from './helper.routing';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		MaterialModule,
		routing
	],
	declarations: [ SettingsComponent]
})
export class HelperModule {
}
