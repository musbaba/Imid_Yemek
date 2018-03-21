import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { User } from '../../models/users';
import { UsersService } from '../../core/users.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements AfterViewInit  {
  selectedUser = new MatTableDataSource<User>();

  displayedColumns = [  'tcNo','kimlik','butonlar'];
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<User>();

  constructor(private userService:UsersService,private router:Router) { }  
  
  onSelect(user:User):void{
    this.userService.findUserById(2).subscribe(data => {
      this.selectedUser.data= data;  
      console.log(this.selectedUser.data)    
    });
  }


  ngAfterViewInit() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource.data = data;      
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  

  yeniKullanici(){
    this.router.navigate(['/personel/yeni']);
    }


}
