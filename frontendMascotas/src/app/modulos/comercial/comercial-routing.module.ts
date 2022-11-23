import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarMascotaAClienteComponent } from './asignar-mascota-a-cliente/asignar-mascota-a-cliente.component';
import { AsignarPlanComponent } from './asignar-plan/asignar-plan.component';
import { AsignarProdServicioAMascotaComponent } from './asignar-prod-servicio-a-mascota/asignar-prod-servicio-a-mascota.component';

const routes: Routes = [
  {
    path: "asignar-mascota-a-cliente/:id",
    component: AsignarMascotaAClienteComponent
  },
  {
    path: "asignar-plan/:id",
    component: AsignarPlanComponent
  },
  {
    path: "asignar-prod-servicio-a-mascota",
    component: AsignarProdServicioAMascotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialRoutingModule { }
