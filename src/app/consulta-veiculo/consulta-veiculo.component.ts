import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import { VehicleModel } from './model/vehicle';
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

  ngOnInit(): void {

    this.vehicleList =  this.service.getVehicle();
  }

  pesquisarByPlate(){
    if(this.plate.value){
      console.log(this.plate.value);
    }
    
  }

  
}
