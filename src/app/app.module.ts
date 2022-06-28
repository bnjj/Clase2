import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Clase2Module } from './module/clase2/clase2.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Clase2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
