import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SettingsService {

	settingsMap = {
		user: {
			type: 'group', title: 'Kullanıcı Bilgileri', subs: {
				name: { label: 'Ad', type: 'text', default: '' },
				surname: { label: 'Soyad', type: 'text', default: '' },
				gender: { label: 'Cinsiyet', type: 'select', default: '', options:[{value:'E',label:'Erkek'},{value:'K',label:'Kadın'}] },
			}
		},
		notification: {
			type: 'group', title: 'Bildirim', subs: {
				vibrate: { label: 'Titreşim', desc: 'Bildirimlerde titreşim gönderimi', type: 'checkbox', default: true },
				sound: { label: 'Ses', type: 'checkbox', default: false },
			}
		},
		ad: {
			type: 'sub', title: 'Reklam Ayarları', desc: "Reklam gösterimi ayarları", subs: {
				show: { label: 'Reklamları göster', type: 'checkbox', default: '' },
				notification: { label: 'Reklam Bildirimleri Al', type: 'checkbox', default: '' },
				money: {
					type: 'sub', title: 'Para Ayarları', desc: "Reklam gösterimi ayarları", subs: {
						buy: { label: 'Pera ver', type: 'checkbox', default: '' },
						get: { label: 'Dolar al', type: 'checkbox', default: '' },
					}
				},
			}
		},

	}

	values = {};

	observer:BehaviorSubject<any>=null;
	change:Subject<any>=null;


	constructor() {
		this.observer=new BehaviorSubject(this.values);
		this.change=new Subject();
		this.change.subscribe(()=>{
			this.observer.next(this.values);
		})
		this.readValues();
	}

	/**
	 * get part from settings map	
	 * @param part part start
	 */
	getMap(path = null) {
		let temp: any = this.settingsMap;
		if(null!=path && ''!=path){
			let pathList=path.split('.');
			for (let i in pathList) {
				temp = temp[pathList[i]];
				if (temp.type == "sub" || temp.type == "group") {
					temp = temp.subs;
				}
			}
		}
		let list = this.mapToList(temp,path);	
		return list;
	}

	/**
	 * convert map to component list	
	 * @param map map start 
	 * @param path path for config 
	 */
	mapToList(map, path = '') {
		if(null===path){
			path='';
		}
		let keys = Object.keys(map);
		let list = [];
		keys.forEach((i) => {

			//for each item
			let newPath = path != '' ? path + '.' + i : i;
			let item = map[i];
			if ('group' == item.type) {
				//groups list with header and inside actions
				list.push({ type: 'title', title: item.title, path: path });
				let subList = this.mapToList(item.subs, newPath);
				list = list.concat(subList);
			} else if ('sub' == item.type) {
				//subs will load in new page
				let subList = this.mapToList(item.subs, newPath);
				list.push({ type: 'sub', title: item.title, desc: item.desc, sub: subList, path: newPath });
			} else {
				//if not a sub or group add it
				item.path = newPath;
				item.value = this.values[newPath] || item.default || '';
				list.push(item)
			}
		});
		return list;
	}

	setValue(name, value,setUp=false) {
		//set value on oarray
		this.values[name] = value;
		//find correct item
		let path = name.split('.');
		let temp: any = this.settingsMap;
		for (let i in path) {
			temp = temp[path[i]];
			if(undefined==temp && setUp==true){
				delete this.values[name];
				return false;
			}
			if (temp.type == "sub" || temp.type == "group") {
				temp = temp.subs;
			}
		}
		//set value ant tick
		temp.value = value;
		this.change.next({name:name,value:value,setUp:setUp});
		this.saveValues();
	}

	/** 
	 * @Author: Can 
	 * @Date: 2018-03-17 20:44:37 
	 * @Desc: read values from localstorage 
	 */	
	readValues(){		
		let pathValue = localStorage.getItem('settingValues');
		if (null !== pathValue) {
			this.values = JSON.parse(pathValue);
			for (let i in this.values) {
				this.setValue(i, this.values[i],true);
				
			}
		} else {
			//first time
			this.generateValues(this.settingsMap);
			this.saveValues();
		}
	}

	saveValues(){
		localStorage.setItem('settingValues', JSON.stringify(this.values));
	}

	generateValues(map, path = '') {
		let keys = Object.keys(map);
		keys.forEach((i) => {
			let newPath = path != '' ? path + '.' + i : i;
			let item = map[i];
			if ('group' == item.type) {
				this.generateValues(item.subs, newPath);
			} else if ('sub' == item.type) {
				this.generateValues(item.subs, newPath);
			} else {
				this.values[newPath]=item.default!=undefined ? item.default : '';
			}
		});
	}

	observ():BehaviorSubject<any>{
		return this.observer;
	}

	changer():Subject<any>{
		return this.change;
	}



}
