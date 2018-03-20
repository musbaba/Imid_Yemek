import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { YeniComponent } from './yeni/yeni.component';
import { GuncelleComponent } from './guncelle/guncelle.component';


const appRoutes: Routes = [
    { path: 'liste', component: ListeComponent },
    { path: 'yeni', component: YeniComponent },
    { path: 'guncelle', component: GuncelleComponent }

];


export const routing = RouterModule.forChild(appRoutes);