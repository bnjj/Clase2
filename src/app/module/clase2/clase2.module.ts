import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';
import { CiclosComponent } from './ciclos/ciclos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeorgeComponent } from './george/george.component';
import { MartyComponent } from './george/components/marty/marty.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    Ejemplo1Component,
    CiclosComponent,
    FormularioComponent,
    GeorgeComponent,
    MartyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class Clase2Module { }
