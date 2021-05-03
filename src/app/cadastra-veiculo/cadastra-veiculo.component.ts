import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,NgControl  } from '@angular/forms';
import { VehicleModel} from '../model/vehicle'
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../service/vehicle.service';
@Component({
  selector: 'app-cadastra-veiculo',
  templateUrl: './cadastra-veiculo.component.html',
  styleUrls: ['./cadastra-veiculo.component.scss'],
  providers:[VehicleService]
})
export class CadastraVeiculoComponent implements OnInit {


  isUpdate: boolean = false;
  form:FormGroup;
  idControl = new FormControl('');
  plateControl = new FormControl({value:"", disabled: true},Validators.required);
  modelControl = new FormControl('',Validators.required);
  manufacturerControl = new FormControl('',Validators.required);
  colorControl = new FormControl('',Validators.required);
  statusControl = new FormControl('',Validators.required);
  
  


  constructor(private service: VehicleService, fb:FormBuilder,private route: ActivatedRoute) { 

    this.form = fb.group({
      id: this.idControl,
      plate: this.plateControl,
      model: this.modelControl,
      manufacturer: this.manufacturerControl,
      color: this.colorControl,
      status: this.statusControl
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if(params.id){
        this.isUpdate = true;
        this.form.get('status')?.disabled;
        this.popularCampos(params.id);
      }else{
        this.isUpdate = false;
      }
    });
  }

  atualizarVehicle(model : VehicleModel){
    let vehicle = this.form.getRawValue();
    this.service.gravarVehicle(vehicle); 

  }

  cadastraVehicle(model : VehicleModel){
    let vehicle = this.form.getRawValue();
    this.service.gravarVehicle(vehicle)
    //todo - fazer mostrar mensagem na tela
    .subscribe(
      val => {
          console.log("Gravou veiculo com sucesso", val);
      },
      response => {
          console.log("ocorreu um erro", response);
      },
      () => {
          console.log("observable is now completed.");
      }
    ); 

  }

  private popularCampos(id: number){
    this.service.buscarVehicelById(id)
    .subscribe((retorno)=>{
      if(retorno){
        this.idControl.setValue(retorno.id)
         this.plateControl.setValue(retorno.plate);
         this.modelControl.setValue(retorno.model);
         this.manufacturerControl.setValue(retorno.manufacturer);
         this.colorControl.setValue(retorno.color)
         if(retorno.status){
          this.statusControl.patchValue('true');
         }else{
          this.statusControl.patchValue('false');
         }
        
      }
    });
  }

  clearForm(){
    this.form.reset();
  }

}
