import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraVeiculoComponent } from './cadastra-veiculo/cadastra-veiculo.component';
import { ConsultaVeiculoComponent } from './consulta-veiculo/consulta-veiculo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'consultar', component:  ConsultaVeiculoComponent},
  { path: 'cadastrar', component: CadastraVeiculoComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
