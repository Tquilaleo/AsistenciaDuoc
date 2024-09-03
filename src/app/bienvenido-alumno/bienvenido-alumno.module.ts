import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidoAlumnoPageRoutingModule } from './bienvenido-alumno-routing.module';

import { BienvenidoAlumnoPage } from './bienvenido-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidoAlumnoPageRoutingModule
  ],
  declarations: [BienvenidoAlumnoPage]
})
export class BienvenidoAlumnoPageModule {}
