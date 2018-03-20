import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListeComponent } from './personeller/liste/liste.component';

const appRoutes: Routes = [
/*	{ path: 'crisis-center', component: CrisisListComponent },
	{ path: 'hero/:id', component: HeroDetailComponent },
	{
		path: 'heroes',
		component: HeroListComponent,
		data: { title: 'Heroes List' }
	},
	{
		path: '',
		redirectTo: '/heroes',
		pathMatch: 'full'
	},*/

	
	
	{ path: 'helper', loadChildren: 'app/helper/helper.module#HelperModule' },
	
	{ path: 'personel', loadChildren: 'app/personeller/personel.module#PersonelModule' },
	{ path: '**', component: NotFoundComponent }
];


export const routing = RouterModule.forRoot(
	appRoutes,
	{ enableTracing: false } // <-- debugging purposes only
);