import { Component, AfterContentInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $;
export class Hero {
	id: number;
	name: string;
  }
  const HEROES: Hero[] = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
  ];
  
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',

	styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


	appTitle:string='App Name';
	appTheme:string='indigo-pink';
	isScrolled=false;


	menu=[
		{text:'Personeller',icon:'user',link:"/go",if:()=>{
			return true;
		}},
		{text:'Yorumlar',icon:'comment',link:"/go"},
		{text:'Kart',icon:'credit-card',link:"/go"}
	]

	constructor(public router:Router){
		this.startTheme();
	}



	ngAfterViewInit(): void {
		let $content=$('mat-drawer-content');
		$content.scroll((e)=>{
			this.isScrolled=$content.scrollTop()>5

		});
	}

	startTheme(){
		let theme=localStorage.getItem('theme');
		if(null!==theme){
			this.appTheme=theme;
		}
	}

	setTheme(event){
		this.appTheme=event.target.getAttribute('theme');
		localStorage.setItem('theme',this.appTheme);
	}

	title = 'app';


	
	displayedColumns = ['position', 'name', 'weight', 'symbol'];
	dataSource = ELEMENT_DATA;

	action(element){
		console.log(element)

	}
}

export interface Element {
	name: string;
	position: number;
	weight: number;
	symbol: string;
  }

  

  const ELEMENT_DATA: Element[] = [
	{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
	{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
	{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
	{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
	{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
	{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
	{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
	{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
	{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
	{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
	{position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
	{position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
	{position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
	{position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
	{position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
	{position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
	{position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
	{position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
	{position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
	{position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];