import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-consulta-veiculo',
  templateUrl: './consulta-veiculo.component.html',
  styleUrls: ['./consulta-veiculo.component.scss']
 
})
export class ConsultaVeiculoComponent implements OnInit {
  
  plate = new FormControl('');

  page = 1;
 

  constructor() {
   
   }

  ngOnInit(): void {
  }

  pesquisarByPlate(){
    if(this.plate.value){
      console.log(this.plate.value);
    }
    
  }

  
}
