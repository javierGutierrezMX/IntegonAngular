import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.css']
})
export class InfoPersonaComponent implements OnInit {

  @Input() nombre:string = "Javier";
  @Input() apellido:string = "Gutiérrez";

  constructor() { }

  ngOnInit(): void {
  }

}
