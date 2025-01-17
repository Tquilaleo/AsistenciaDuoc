import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidoDocentePage } from './bienvenido-docente.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidoDocentePageRoutingModule {}
