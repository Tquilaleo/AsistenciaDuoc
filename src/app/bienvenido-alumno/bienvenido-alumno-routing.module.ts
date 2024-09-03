import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoAlumnoPage } from './bienvenido-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidoAlumnoPageRoutingModule {}
