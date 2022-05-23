import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Clientes/Clientes.component';
import { FacturasComponent } from './Facturas/Facturas.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { ReportesComponent } from './Reportes/Reportes.component';

const routes: Routes = [
  {path: 'clientes', component:ClientesComponent},
  {path: 'facturas', component:FacturasComponent},
  {path: 'reportes', component:ReportesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
