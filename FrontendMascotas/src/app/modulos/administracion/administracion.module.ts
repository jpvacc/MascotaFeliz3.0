import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { ConsultarUsuarioComponent } from './usuarios/consultar-usuario/consultar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { ConsultarMascotaComponent } from './mascotas/consultar-mascota/consultar-mascota.component';
import { ConsultarPlanComponent } from './planes/consultar-plan/consultar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { ConsultarSucursalComponent } from './sucursales/consultar-sucursal/consultar-sucursal.component';
import { ConsultarProductoServicioComponent } from './productos-servicios/consultar-producto-servicio/consultar-producto-servicio.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { ConsultarProspectoComponent } from './prospectos/consultar-prospecto/consultar-prospecto.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ConsultarUsuarioComponent,
    EliminarUsuarioComponent,
    EliminarMascotaComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    ConsultarMascotaComponent,
    ConsultarPlanComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    EliminarSucursalComponent,
    EditarSucursalComponent,
    CrearSucursalComponent,
    ConsultarSucursalComponent,
    ConsultarProductoServicioComponent,
    CrearProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    EliminarProspectoComponent,
    EditarProspectoComponent,
    CrearProspectoComponent,
    ConsultarProspectoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
