import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  // getPersonasFromAPI() :any{
  //   const request$ = new Observable(observer => {
  //     const url:string = "http://localhost:3005/personas";
  //     const request = new XMLHttpRequest();

  //     request.addEventListener("load", () => {
  //     if (request.readyState === 4 && request.status === 200) {
  //     observer.next(JSON.parse(request.responseText));
  //     observer.complete();
  //     } else {
  //     observer.error('An error has occured');
  //     }
  //     })
  //     request.open("GET", url);
  //     request.send();
  //     });
  //     return request$;
  // }

  getPersonasWithHTTPClientAngular(): Observable<any[]>{
      return this.http.get<People[]>('http://localhost:3005/personas');
  }
}
