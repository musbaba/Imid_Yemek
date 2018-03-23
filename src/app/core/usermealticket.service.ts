import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../core/message.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Ticket } from '../models/ticket';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsermealticketService {

  constructor(private http:HttpClient) { }

  private ticketUrl='http://localhost:63706/mealtickets';


getTickets(): Observable<Ticket[]> {

    return this.http.get<Ticket[]>(this.ticketUrl)
    .pipe(
      tap(users => this.log(`fetched heroes`)),
      catchError(this.handleError('getUsers', []))
    );
  }
 

findTicketByUserId(id: number): Observable<Ticket[]> {
  
  return this.http.get<Ticket[]>(`${this.ticketUrl}/${id}`)
  .map(res=>{
    return res;
  });
}

public handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


/** Log a HeroService message with the MessageService */
public log(message: string) {
//this.messageService.add('UserService: ' + message);
}

}
