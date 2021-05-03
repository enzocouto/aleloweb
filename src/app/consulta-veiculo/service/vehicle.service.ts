import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, pluck } from 'rxjs/operators';
import { VehicleModel, Paginas } from '../../model/vehicle'
import { Observable  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 
  

  constructor(private httpClient: HttpClient){ }
  

  getAllVehiclesPaginado(page: number,pageSize: number){

    return this.httpClient
      .get<any>('http://localhost:8080/aleloapi/vehicles?page='+page+'&pageSize='+pageSize, {})
      .pipe(
        tap((valor) => console.log(valor.content)),
        pluck('content'));
      
  }


  private deContentParaVehicleModel(veiculo: any) {
    console.log(veiculo);
  }


  getVehiclesByPlate(plate : string) :Observable<VehicleModel>{
    const params = plate ? new HttpParams().append('plate', plate.toUpperCase()) : undefined;
    return this.httpClient
      .get<VehicleModel>('http://localhost:8080/aleloapi/vehicles', {params});
      
  }

  excluirVehicle(id: any) {
    return this.httpClient
      .delete('http://localhost:8080/aleloapi/vehicles/'+id, {});
  }

}
