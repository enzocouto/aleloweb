import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import { VehicleModel } from '../model/vehicle';
import { VehicleService } from '../service/vehicle.service';
import { Router } from '@angular/router';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-consulta-veiculo',
  templateUrl: './consulta-veiculo.component.html',
  styleUrls: ['./consulta-veiculo.component.scss'],
  providers:[VehicleService]
 
})
export class ConsultaVeiculoComponent implements OnInit {
  
  plate = new FormControl('');
  public page = 0;
  public pageSize = 10;
  public vehicleList: Array<VehicleModel> = [];

  constructor(private service: VehicleService,private router: Router) {
    
   }

  ngOnInit() {

    /*
    * Paginação server side apresentou problemas na implementação aos 45 minutos do segundo tempo.
      O gerente de TI e o Owner do Produto decidiram entrar em Produção com a MVP 1.0 paginando do lado do client. 
    this.service.getAllVehiclesPaginado(this.page,this.pageSize)
    .subscribe((retorno)=>{
       this.vehicleList = retorno;
    });
    */
   this.service.getAllVehicles()
    .subscribe((retorno)=>{
        this.vehicleList = retorno;
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

  excluirVehicle(id : any){
        this.service.excluirVehicle(id)
        .subscribe((retorno)=>{       
             //todo - Tratar retorno

        })
  }

}
