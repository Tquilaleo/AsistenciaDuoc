import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //importar Forms para usuario

import { IonicModule } from '@ionic/angular';

import { LoginAlumnoPageRoutingModule } from './login-alumno-routing.module';

import { LoginAlumnoPage } from './login-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    LoginAlumnoPageRoutingModule
  ],
  declarations: [LoginAlumnoPage]
})
export class LoginAlumnoPageModule {}
