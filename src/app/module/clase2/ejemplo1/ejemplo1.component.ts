import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  productos = [
    { 
      nombre :'Celular Xiaomi',
      precio :1300.00,
      fechaIngreso:new Date("2021,05,25")
    },
    { 
      nombre :'Tablet Xiaomi',
      precio :1890.00,
      fechaIngreso:new Date("2021,05,23")
    },
    { 
      nombre :'Tablet Apple',
      precio :3590.00,
      fechaIngreso:new Date("2022,06,06")
    },  
    { 
      nombre :'Auriculares  Wawei',
      precio :150.00,
      fechaIngreso:new Date("2022,09,13")
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
