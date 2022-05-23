import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuelosComponent } from './Vuelos/Vuelos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [VuelosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    VuelosComponent
  ]
})
export class AerolineaModule { }
