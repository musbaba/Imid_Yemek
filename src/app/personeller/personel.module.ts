import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from './liste/liste.component';
import { YeniComponent } from './yeni/yeni.component';
import { GuncelleComponent } from './guncelle/guncelle.component';
import { routing } from './personel.routing';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DetayComponent } from './detay/detay.component';
import { UsermealticketService } from '../core/usermealticket.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    FormsModule,
		routing
  ],
  declarations: [ListeComponent, YeniComponent, GuncelleComponent, DetayComponent],
  providers:[UsermealticketService]
  
})
export class PersonelModule { }
