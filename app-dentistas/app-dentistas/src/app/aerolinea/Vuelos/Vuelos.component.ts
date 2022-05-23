import { Component, OnInit } from '@angular/core';
import {Vuelo} from '../../vuelo.model'
import {VuelosService} from '../../vuelos.service'

@Component({
  selector: 'app-Vuelos',
  templateUrl: './Vuelos.component.html',
  styleUrls: ['./Vuelos.component.css'],
  providers: [VuelosService]
})
export class VuelosComponent implements OnInit {

  vuelos:any = [];
  noDeVuelo!: number;
  fechaVuelo!: Date;
  horarioVuelo!: string;
  origenVuelo!: string;
  destinoVuelo!: string;

  constructor(private vuelosServices: VuelosService) { }

  AddVuelo(){
    this.noDeVuelo = this.getRandomInt(1,999);
    let tempVuelo : Vuelo =  {numeroDeVuelo: this.noDeVuelo, fecha: this.fechaVuelo, horario: this.horarioVuelo, origen : this.origenVuelo, destino: this.destinoVuelo};
    this.vuelosServices.postVuelos(tempVuelo).subscribe(vuelo => {this.vuelos.push(vuelo)});
    this.clean();
  }

  clean(){
    this.noDeVuelo = 0;
    this.fechaVuelo = new Date(0,0,0);
    this.horarioVuelo = "";
    this.origenVuelo ="";
    this.destinoVuelo = "";
  }

  ngOnInit() {
    this.vuelos = this.vuelosServices.getVuelos().subscribe( data => this.vuelos = data);
    //para tomar los vuelos en el otro formato, que intentamos como data.vuelos, se debe acceder asi : data["vuelos"].
    // de esta forma podemos adentrarnos en la respuesta que viene en data.
    
  }

  trackByVuelo(index: number, vuelo: Vuelo): number {
    return vuelo.numeroDeVuelo;
  }
   getRandomInt(min:number, max:number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
