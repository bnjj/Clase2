import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marty',
  templateUrl: './marty.component.html',
  styleUrls: ['./marty.component.css']
})
export class MartyComponent implements OnInit {

  @Input() mensajeRecibido : string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
