import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleModel} from '../model/vehicle'

@Component({
  selector: 'app-cadastra-veiculo',
  templateUrl: './cadastra-veiculo.component.html',
  styleUrls: ['./cadastra-veiculo.component.scss']
})
export class CadastraVeiculoComponent implements OnInit {

  form:FormGroup;
  idControl = new FormControl('');
  plateControl = new FormControl('',Validators.required);
  modelControl = new FormControl('',Validators.required);
  manufacturerControl = new FormControl('',Validators.required);
  colorControl = new FormControl('',Validators.required);
  statusControl = new FormControl('',Validators.required);

  constructor(fb:FormBuilder) { 

    this.form = fb.group({
      id: this.idControl,
      plate: this.plateControl,
      model: this.modelControl,
      manufacturer: this.manufacturerControl,
      color: this.colorControl,
      status: this.statusControl
    });
  }

  ngOnInit(): void {
  }

  cadastraVehicle(model : VehicleModel){
       console.log(model.plate);
       console.log(model.model);
       console.log(model.manufacturer);
       console.log(model.color);
       console.log(model.status);
  }


  clearForm(){
    this.form.reset();
  }

}
