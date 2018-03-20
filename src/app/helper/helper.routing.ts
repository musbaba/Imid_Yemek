import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
	{ path: 'settings', component: SettingsComponent },
];


export const routing = RouterModule.forChild(appRoutes);