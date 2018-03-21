import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '../../models/users';
import { UsersService } from '../../core/users.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements AfterViewInit  {

  displayedColumns = [  'tcNo','kimlik','butonlar'];
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<User>();

  constructor(private userService:UsersService) { }  
  
  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }


ngAfterViewInit() {
  this.userService.getUsers().subscribe(data => {
    this.dataSource.data = data;
    console.log(this.dataSource.data);
  });
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
 

}
