import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoutileriasComponent } from './demoutilerias/demoutilerias.component';



@NgModule({
  declarations: [
    DemoutileriasComponent
  ],
  //trae de otros modulos
  imports: [
    CommonModule
  ],
  //exports comparte cosas a otros modulos
  exports:[
    DemoutileriasComponent
  ],
  providers:[],
  bootstrap:[]
})
export class UtileriasModule { }
