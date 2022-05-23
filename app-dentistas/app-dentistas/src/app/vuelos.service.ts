import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vuelo } from './vuelo.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(private http: HttpClient) { }

  getVuelos(){
   return this.http.get<Vuelo[]>('http://localhost:3005/vuelos').pipe(
     catchError((error: HttpErrorResponse) =>{
       console.log(`Ocurrio un error ${error}`);
       return throwError(error);
     })
   );
  }

  postVuelos(obj: Vuelo){
   return  this.http.post<Vuelo>('http://localhost:3005/vuelos',obj);
  }
}
