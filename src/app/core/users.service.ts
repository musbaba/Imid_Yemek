import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/users';
import { MessageService } from '../core/message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  

  findUserById(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}/${id}`);
}

 /** POST: add a new hero to the server */
  createUser (user:User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.userUrl+'/register',user, httpOptions)
      .pipe(
        tap((hero: User) => this.log(`user created w/ id=${user.userId}`)),
        catchError(this.handleError<User>('createUser'))
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
