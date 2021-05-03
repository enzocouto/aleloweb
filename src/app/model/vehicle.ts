
export interface Pagina extends Array<VehicleModel>{}

export class VehicleModel{
     id?: number;
     plate?: string;
     model?: string
     manufacturer?: string;
     color?: string;
     status?: boolean;
     content?: Object;
     constructor(){
      this.content = {};
     }
}

export class Paginas{

  content?: Pagina;
}


