import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ShipperModel } from './models/shipper-model';
import { ApiServiceService } from './services/api-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formUsuario! : FormGroup;
  constructor(private fb: FormBuilder,private apiServ:ApiServiceService) { }

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      nombre: new FormControl('',[Validators.required]),
      telefono: new FormControl('',)

    })
  }
 guardar() {

  console.log('se guardaa')
  var shipperModel = new ShipperModel();
  shipperModel.nombre=this.formUsuario.get('nombre')?.value
  shipperModel.nombre=this.formUsuario.get('telefono')?.value
 
  this.apiServ.CrearShipper(shipperModel).subscribe(res =>{
    console.log('Se guardo el prod.' + res)
  })
}


}
