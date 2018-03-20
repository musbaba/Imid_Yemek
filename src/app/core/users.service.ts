import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/users';
import { MessageService } from '../core/message.service';

@Injectable()
export class UsersService {

  constructor(private http:HttpClient) { }

  private userUrl='http://localhost:63706/users';


  getUsers(): Observable<User[]> {

      return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(users => this.log(`fetched heroes`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  findUserById(userId: number): Observable<User[]> {
    //return this.http.get<User>(`/api/courses/${courseId}`);
    return this.http.get<User[]>(this.userUrl+`${userId}`)
      .pipe(
        tap(users => this.log(`fetched heroes`)),
        catchError(this.handleError('findUserById', []))
      );
  }

  findUsers(
    userId:number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3):  Observable<User[]> {

    return this.http.get('/users', {
        params: new HttpParams()
            .set('userId', userId.toString())
            .set('filter', filter)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(
        map(res =>  res["payload"])
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
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
  private log(message: string) {
    //this.messageService.add('UserService: ' + message);
  }
}
