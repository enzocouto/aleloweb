import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import { VehicleModel } from '../model/vehicle';
import { VehicleService } from './service/vehicle.service';
import {
  tap,
  filter
} from 'rxjs/operators';


@Component({
  selector: 'app-consulta-veiculo',
  templateUrl: './consulta-veiculo.component.html',
  styleUrls: ['./consulta-veiculo.component.scss']
 
})
export class ConsultaVeiculoComponent implements OnInit {
  
  plate = new FormControl('');
  public page = 0;
  public pageSize = 10;
  public vehicleList: Array<VehicleModel> = [];

  constructor(private service: VehicleService) {
    
   }

  ngOnInit() {
    
    this.service.getAllVehiclesPaginado(this.page,this.pageSize)
    .subscribe((retorno)=>{
      if(retorno){
        this.vehicleList = retorno;
      }
    });
    
  }

  pesquisarByPlate(){
    this.vehicleList = []
    if(this.plate.value){
      this.service.getVehiclesByPlate(this.plate.value)
      .subscribe((retorno)=>{
        if(retorno){
          this.vehicleList.push(retorno);
        }
      });
    }
    
  }
  
}
