import { Component, OnInit, AfterViewInit } from '@angular/core';
import  * as Parallax from 'parallax-js'

declare var $;
@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {

	code='';

	constructor() {
		this.code=this.codeGenerator();
	 }

	ngOnInit() {
	}

	ngAfterViewInit(): void {
		//var scene = document.getElementById('scene');
		//var parallaxInstance = new Parallax(scene);
	}

	codeGenerator(){
		return '0x'+Math.random().toString(32).toUpperCase().substr(3);
	}

}
