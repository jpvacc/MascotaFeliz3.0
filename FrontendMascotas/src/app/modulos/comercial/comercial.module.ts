import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercialRoutingModule } from './comercial-routing.module';
import { CrearProspectoComponent } from './crear-prospecto/crear-prospecto.component';


@NgModule({
  declarations: [
    CrearProspectoComponent
  ],
  imports: [
    CommonModule,
    ComercialRoutingModule
  ]
})
export class ComercialModule { }
