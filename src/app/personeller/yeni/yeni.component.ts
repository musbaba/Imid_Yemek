import { Component, OnInit } from '@angular/core';
import { TanimlarService } from '../../core/tanimlar.service';
import { MatTableDataSource } from '@angular/material';
import { Birim } from '../../models/birim';
import { Unvan } from '../../models/unvan';
import { UsersService } from '../../core/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/users';

@Component({
  selector: 'app-yeni',
  templateUrl: './yeni.component.html',
  styleUrls: ['./yeni.component.scss']
})
export class YeniComponent implements OnInit {

  model : any={};
  birimler : Birim[];
  unvanlar : Unvan[];
  constructor(private tanimService:TanimlarService,
              private userService:UsersService,            
              private router: Router) { }

  ngOnInit() {
    this.tanimService.getBirimler().subscribe(data => {
      this.birimler = data;
    });

    this.tanimService.getUnvanlar().subscribe(data => {
      this.unvanlar = data;
    });
  }

  createuser() {
    console.log(this.model);
    this.userService.createUser(this.model)
        .subscribe(
            data => {
                this.router.navigate(['/personel/liste']);
            },
            error => {
                //this.loading = false;
            });
  }
}
