import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import { VehicleModel } from '../model/vehicle';
import { VehicleService } from './service/vehicle.service';

@Component({
  selector: 'app-consulta-veiculo',
  templateUrl: './consulta-veiculo.component.html',
  styleUrls: ['./consulta-veiculo.component.scss']
 
})
export class ConsultaVeiculoComponent implements OnInit {
  
  plate = new FormControl('');
  public page = 1;
  public pageSize = 10;
  public vehicleList: Array<VehicleModel> = [];

  constructor(private service: VehicleService) {
    
   }

  ngOnInit() {

  }

  pesquisarByPlate(){
    if(this.plate.value){
     this.service.getVehicle(this.plate.value)
      .subscribe((retorno)=>{
           this.vehicleList = retorno.payload;
      });
         
    }
    
  }

  
}
