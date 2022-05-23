import { Component, OnInit } from '@angular/core';
import {People} from '../people.model'
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-ListaPersonas',
  templateUrl: './ListaPersonas.component.html',
  styleUrls: ['./ListaPersonas.component.css'],
  providers:[PersonasService]
})
export class ListaPersonasComponent  implements OnInit {

personas: any[] = [];
dato?:string;

  constructor(private personasServices: PersonasService) {}

  ngOnInit() {
    // this.personasServices.getPersonasFromAPI().subscribe({
    //   next: (data: { personas: any; }) => {
    //     this.personas = data.personas;
    //   }
      
    // });

    this.personasServices.getPersonasWithHTTPClientAngular().subscribe( data => this.personas = data);
  }

  trackByPeople(index: number, people: People): number {
    return people.id;
  }

}
