import { Component, DoCheck,OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit,DoCheck,OnDestroy {

  orden: number =0;
  numero :number =0;
 productos:any[] = [];
  constructor(private router:Router) {
   this.mostrarCiclo("constructor")
   }

 
  ngOnDestroy():void{
    this.mostrarCiclo("ngOndestroy")
  }
  ngDoCheck(): void {
    this.mostrarCiclo("ngDocheck")
  }
  ngOnInit(): void {
    this.mostrarCiclo("OnInit")
  }

  mostrarCiclo(ciclo:string){
    this.orden++;
    console.log(`${this.orden}Ejecutando ciclo ${ciclo}`)
  }
  volverAPipes(){
    this.router.navigate(['/pipes']);
  }
}

