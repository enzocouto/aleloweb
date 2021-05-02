import { Injectable } from '@angular/core';
import { VehicleModel } from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  

  constructor() { }
  

  getVehicle(){

    let list = [];
    for(let index = 0; index < 100; index++){
       list.push({id:index,plate:"ABC-1234",model:"Class C 1.1 Avantgarde Turbo Flex ",manufacturer:"Mercedes-Benz",color:"black",status:true})
    }
    return list;
  }
 
  

  
}
