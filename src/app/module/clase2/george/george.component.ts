import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-george',
  templateUrl: './george.component.html',
  styleUrls: ['./george.component.css']
})
export class GeorgeComponent implements OnInit {

  mensaje : string ='';

  constructor() { }

  ngOnInit(): void {
  }
  enviarMensaje(msj : string){
this.mensaje  = msj
  }
  

}
