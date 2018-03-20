import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { UsersService } from '../../core/users.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  dataSource: User[];
  displayedColumns = ['adi', 'soyadi', 'tcNo', 'sicilNo'];
  
  constructor(private userService:UsersService) { }
  
  
  
  ngOnInit() {
    console.log('Merhaba');
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers()
    .subscribe(users=>this.dataSource=users);
  }

}
