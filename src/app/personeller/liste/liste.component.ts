import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { User } from '../../models/users';
import { UsersService } from '../../core/users.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Ticket } from '../../models/ticket';
import { UsermealticketService } from '../../core/usermealticket.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
 
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements AfterViewInit  {
  
  displayedColumns = [  'tcNo','kimlik','butonlar'];
  fisColumns = [  'tarih','ucret'];
  selection = new SelectionModel<User>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  heroes :User[];
	selectedHero: User;

  dataSource = new MatTableDataSource<User>();

  constructor(private userService:UsersService,
              private router:Router,
              private ticketservice:UsermealticketService ) { }  

  ticketDataSource =new MatTableDataSource<Ticket>();




	onSelect(hero: User): void {
    this.selectedHero = hero;
    this.ticketservice.findTicketByUserId(hero.userId).subscribe(data=>{
      this.ticketDataSource.data=data;
      console.log(this.ticketDataSource.data);
    })
	}

  ngAfterViewInit() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource.data = data; 
      this.heroes=data;   
        
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
