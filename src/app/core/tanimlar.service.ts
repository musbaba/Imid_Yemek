import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Unvan, Birim } from '../models/tanimtablolari';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TanimlarService {

  private apiUrl='http://localhost:63706/users';    

  constructor(private http:HttpClient) { }

  getUnvanlar(): Observable<Unvan[]> {

    return this.http.get<Unvan[]>(this.apiUrl)
    .pipe(
      tap(users =>this.log(`fetched unvanlar`)),
      catchError(this.handleError('getUnvanlar', []))
    );
  }

  

  getBirimler(): Observable<Birim[]> {

    return this.http.get<Birim[]>(this.apiUrl)
    .pipe(
      tap(users => this.log(`fetched birimler`)),
      catchError(this.handleError('getBirimler', []))
    );
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
