import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../core/settings.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
//	styles :[``]
})
export class SettingsComponent implements OnInit {

	settingsList = {}

	oldPath='';

	constructor(public settings: SettingsService) {
		this.settingsList = settings.getMap();
		settings.changer().subscribe((data)=>{
				console.log(data);
		})

	}

	ngOnInit() {
	}

	valueChange(name,value){
		console.log(name,value)
		this.settings.setValue(name,value);
	}

	loadSub(subKey){
		this.oldPath=subKey;
		let list=this.settings.getMap(subKey);
		this.settingsList=list;
	}

	goBackSettings(){
		let path:any=this.oldPath.split('.');
		path=path.slice(0,path.length-1);
		path=path.join('.');
		this.oldPath=path;

		let list=this.settings.getMap(this.oldPath);
		this.settingsList=list;

	}

}
