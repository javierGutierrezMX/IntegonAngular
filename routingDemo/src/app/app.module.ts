import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './Clientes/Clientes.component';
import { FacturasComponent } from './Facturas/Facturas.component';
import { ReportesComponent } from './Reportes/Reportes.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

@NgModule({
  declarations: [				
    AppComponent,
      ClientesComponent,
      FacturasComponent,
      ReportesComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
