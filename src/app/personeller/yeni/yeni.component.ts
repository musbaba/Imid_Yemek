import { Component, OnInit } from '@angular/core';
import { TanimlarService } from '../../core/tanimlar.service';
import { Birim, Unvan } from '../../models/tanimtablolari';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-yeni',
  templateUrl: './yeni.component.html',
  styleUrls: ['./yeni.component.scss']
})
export class YeniComponent implements OnInit {

  birimler : Birim[];
  unvanlar:Unvan[];
  constructor(private tanimService:TanimlarService) { }

  ngOnInit() {

    console.log('Birimler');
    this.tanimService.getBirimler().subscribe(data => {
      this.birimler = data;
      console.log(data);
    });

    console.log('Unvanlar');
    this.tanimService.getUnvanlar().subscribe(data => {
      this.unvanlar = data;
      console.log(data);
    });
  }

}
