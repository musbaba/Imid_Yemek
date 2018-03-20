import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule,
	MatCardModule, MatCheckboxModule, MatSelectModule
} from '@angular/material';


@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule, MatCardModule,
		MatCheckboxModule, MatSelectModule
	],
	exports: [
		MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule, MatCardModule,
		MatCheckboxModule, MatSelectModule
	],
	declarations: []
})
export class MaterialModule { }
