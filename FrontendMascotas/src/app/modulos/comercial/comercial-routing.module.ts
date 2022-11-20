import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProspectoComponent } from './crear-prospecto/crear-prospecto.component';

const routes: Routes = [
  {
    path: "prospecto",
    component: CrearProspectoComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialRoutingModule { }
