import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

constructor(private http: HttpClient) { }

getUsers(){
  return this.http.get<User[]>('http://localhost:3005/users').pipe(
    catchError((error: HttpErrorResponse) =>{
      console.log(`Ocurrio un error ${error}`);
      return throwError(error);
    })
  );
  }

postUser(obj: User){
  return  this.http.post<User>('http://localhost:3005/users',obj);
  }

}
