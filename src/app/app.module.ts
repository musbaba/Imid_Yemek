import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PersonelModule } from './personeller/personel.module';
import { UsersService } from './core/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './app.config';
import { TanimlarService } from './core/tanimlar.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
    
  ],
  imports: [
  HttpClientModule,
	BrowserModule,
	BrowserAnimationsModule,
	MaterialModule,
	RouterModule,
  routing,
  PersonelModule
  ],
  bootstrap: [AppComponent],
  providers:[
		TanimlarService
	]
})
export class AppModule { }
