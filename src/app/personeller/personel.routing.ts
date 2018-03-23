import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { YeniComponent } from './yeni/yeni.component';
import { GuncelleComponent } from './guncelle/guncelle.component';
import { DetayComponent } from './detay/detay.component';


const appRoutes: Routes = [
    { path: 'liste', component: ListeComponent },
    { path: 'yeni', component: YeniComponent },
    { path: 'guncelle', component: GuncelleComponent },
    { path: 'detay/:id', component:DetayComponent },

];


export const routing = RouterModule.forChild(appRoutes);