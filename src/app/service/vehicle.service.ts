import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { tap, pluck,retry, catchError } from 'rxjs/operators';
import { VehicleModel } from '../model/vehicle'
import { Observable,throwError  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 
  apiUrl = 'http://localhost:8080/aleloapi/vehicles';


  headers = new HttpHeaders()
            .set("X-CustomHeader", "custom header value");

  constructor(private httpClient: HttpClient){ }
  

  getAllVehiclesPaginado(page: number,pageSize: number){

    return this.httpClient
      .get<any>(this.apiUrl+'?page='+page+'&pageSize='+pageSize, {})
      .pipe(
        tap((valor) => console.log(valor.content)),
        pluck('content'),
        retry(1),
        catchError(this.handleError)
        );
        
  }

  getVehiclesByPlate(plate : string) :Observable<VehicleModel>{
    const params = plate ? new HttpParams().append('plate', plate.toUpperCase()) : undefined;
    return this.httpClient
      .get<VehicleModel>(this.apiUrl, {params})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
      
  }

  excluirVehicle(id: number) {
    return this.httpClient
      .delete(this.apiUrl+'/'+id, {})
      .pipe(
        retry(1),
        catchError(this.handleError)
    );
  }



  public buscarVehicelById(id : number){
   
    return this.httpClient
      .get<VehicleModel>(this.apiUrl+'/'+id, {})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
      
  }

  getAllVehicles() :Observable<VehicleModel[]>{
   
    return this.httpClient
      .get<VehicleModel[]>(this.apiUrl+'/buscarTodos', {})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
      
  }

  gravarVehicle(vehicle : any){

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.httpClient.put<VehicleModel>(this.apiUrl + '/'+ vehicle.id, JSON.stringify(vehicle), 
    {headers}
    );
  }


  handleError(error : any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
