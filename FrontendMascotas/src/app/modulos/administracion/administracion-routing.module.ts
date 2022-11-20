import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarMascotaComponent } from './mascotas/consultar-mascota/consultar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { ConsultarPlanComponent } from './planes/consultar-plan/consultar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { ConsultarProductoServicioComponent } from './productos-servicios/consultar-producto-servicio/consultar-producto-servicio.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { ConsultarProspectoComponent } from './prospectos/consultar-prospecto/consultar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { ConsultarSucursalComponent } from './sucursales/consultar-sucursal/consultar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { ConsultarUsuarioComponent } from './usuarios/consultar-usuario/consultar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
    
  },
  {
    path: "consultar-usuario",
    component: ConsultarUsuarioComponent
  },
  {
    path: "editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  {
    path: "crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path: "consultar-mascota",
    component: ConsultarMascotaComponent
  },
  {
    path: "editar-mascota",
    component: EditarMascotaComponent
  },
  {
    path: "eliminar-mascota",
    component: EliminarMascotaComponent
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },
  {
    path: "consultar-plan",
    component: ConsultarPlanComponent
  },
  {
    path: "editar-plan",
    component: EditarPlanComponent
  },
  {
    path: "eliminar-plan",
    component: EliminarPlanComponent
  },
  {
    path: "crear-sucursal",
    component: CrearSucursalComponent
  },
  {
    path: "consultar-sucursal",
    component: ConsultarSucursalComponent
  },
  {
    path: "editar-sucursal",
    component: EditarSucursalComponent
  },
  {
    path: "eliminar-sucursal",
    component: EliminarSucursalComponent
  },
  {
    path: "crear-producto-servicio",
    component: CrearProductoServicioComponent
  },
  {
    path: "consultar-producto-servicio",
    component: ConsultarProductoServicioComponent
  },
  {
    path: "editar-producto-servicio",
    component: EditarProductoServicioComponent
  },
  {
    path: "eliminar-producto-servicio",
    component: EliminarProductoServicioComponent
  },
  {
    path: "crear-prospecto",
    component: CrearProspectoComponent
  },
  {
    path: "consultar-prospecto",
    component: ConsultarProspectoComponent
  },
  {
    path: "editar-prospecto",
    component: EditarProspectoComponent
  },
  {
    path: "eliminar-prospecto",
    component: EliminarProspectoComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
