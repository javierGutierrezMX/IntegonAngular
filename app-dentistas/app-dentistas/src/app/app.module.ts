import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Ejemplo } from "./app.ejemplo";
import { AppComponent } from './app.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { ListaPersonasComponent } from './ListaPersonas/ListaPersonas.component';
import { UtileriasModule } from './utilerias/utilerias.module';
import { SharedModule } from './shared/shared.module';
import { AerolineaModule } from './aerolinea/aerolinea.module';
import { RouterModule, Routes } from '@angular/router';
import { DemoutileriasComponent } from './utilerias/demoutilerias/demoutilerias.component';
import { VuelosComponent } from './aerolinea/Vuelos/Vuelos.component';
import { DetallePersonaComponent } from './detallePersona/detallePersona.component';

const routes: Routes = [
  {path: 'demoUtilerias', component:DemoutileriasComponent},
  {path: 'vuelos', component: VuelosComponent},
  {path: 'personas', component:ListaPersonasComponent},
  {path: 'matematico', component:MatematicoComponent},
  {path: 'personas/detallePersonas/:num', component:DetallePersonaComponent},
  {path: '**', redirectTo : '/demoUtilerias'}
];
@NgModule({
  declarations: [	
    AppComponent,
    Ejemplo,
    Ejemplo2Component,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
      ListaPersonasComponent,
      DetallePersonaComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UtileriasModule,
    SharedModule,
    FormsModule,
    AerolineaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, CounterComponent]
})
export class AppModule { }
