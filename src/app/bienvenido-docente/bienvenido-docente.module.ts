import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenidoDocentePageRoutingModule } from './bienvenido-docente-routing.module';

import { BienvenidoDocentePage } from './bienvenido-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenidoDocentePageRoutingModule
  ],
  declarations: [BienvenidoDocentePage]
})
export class BienvenidoDocentePageModule {}
