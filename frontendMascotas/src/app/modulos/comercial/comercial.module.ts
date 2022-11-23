import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialRoutingModule } from './comercial-routing.module';
import { AsignarPlanComponent } from './asignar-plan/asignar-plan.component';
import { AsignarProdServicioAMascotaComponent } from './asignar-prod-servicio-a-mascota/asignar-prod-servicio-a-mascota.component';
import { AsignarMascotaAClienteComponent } from './asignar-mascota-a-cliente/asignar-mascota-a-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AsignarPlanComponent,
    AsignarProdServicioAMascotaComponent,
    AsignarMascotaAClienteComponent
  ],
  imports: [
    CommonModule,
    ComercialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComercialModule { }
