import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule,
	MatCardModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule
} from '@angular/material';


@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule, MatCardModule,
		MatCheckboxModule, MatSelectModule,MatFormFieldModule
	],
	exports: [
		MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule, MatCardModule,
		MatCheckboxModule, MatSelectModule,MatFormFieldModule
	],
	declarations: []
})
export class MaterialModule { }
