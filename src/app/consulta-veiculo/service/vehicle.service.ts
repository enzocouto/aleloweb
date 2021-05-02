import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, pluck } from 'rxjs/operators';
import { VehicleModel, VehiclesAPI} from '../../model/vehicle'
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  

  constructor(private httpClient: HttpClient) { }
  

  

  getVehicle(plate : string){
    const params = plate ? new HttpParams().append('plate', plate) : undefined;
    return this.httpClient
      .get<VehiclesAPI>('http://localhost:8080/aleloapi/vehicles', {params})

  }
}
