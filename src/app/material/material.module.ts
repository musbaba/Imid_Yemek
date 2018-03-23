import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule,
	MatCardModule, MatCheckboxModule, MatSelectModule, MatFormFieldModule,MatExpansionModule, MatDatepickerModule, MatIconModule
} from '@angular/material';


@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule, MatCardModule,
		MatCheckboxModule, MatSelectModule,MatFormFieldModule,MatExpansionModule,MatDatepickerModule,MatIconModule
	],
	exports: [
		MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatTableModule, MatInputModule, MatCardModule,
		MatCheckboxModule, MatSelectModule,MatFormFieldModule,MatExpansionModule,MatDatepickerModule,MatIconModule
	],
	declarations: []
})
export class MaterialModule { }
