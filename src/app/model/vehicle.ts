
export interface Vehicles extends Array<VehicleModel> {}

export class VehicleModel{
    public id?: number;
    public plate?: string;
    public model?: string
    public manufacturer?: string;
    public color?: string;
    public status?: boolean;

    constructor(){
        
      }
}



export interface VehiclesAPI {
  payload: Vehicles;
}

