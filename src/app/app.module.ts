import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaVeiculoComponent } from './consulta-veiculo/consulta-veiculo.component';
import { CadastraVeiculoComponent } from './cadastra-veiculo/cadastra-veiculo.component';
import { MenuComponent } from './menu/menu.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleService} from './service/vehicle.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { httpSetHeaders } from './httpSetHeaders.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ConsultaVeiculoComponent,
    CadastraVeiculoComponent,
    MenuComponent,
    ReportsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    VehicleService,
    { provide: HTTP_INTERCEPTORS, useClass: httpSetHeaders, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
