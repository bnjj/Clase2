import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclosComponent } from './module/clase2/ciclos/ciclos.component';
import { Ejemplo1Component } from './module/clase2/ejemplo1/ejemplo1.component';
import { FormularioComponent } from './module/clase2/formulario/formulario.component';
import { GeorgeComponent } from './module/clase2/george/george.component';

const routes: Routes = [
  {
  path : 'pingo',
  component : Ejemplo1Component
},
{
  path : 'pipes',
  component : Ejemplo1Component
},
{
  path : 'ciclos',
  component : CiclosComponent
},
{
  path : '',
  component : FormularioComponent
}
,
{
  path : 'comunicacion',
  component : GeorgeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
