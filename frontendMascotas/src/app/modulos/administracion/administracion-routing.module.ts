import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarProductoServicioComponent } from './productos-servicios/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospectos/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospectos/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospectos/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
 
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
    
  },
  {
    path: "buscar-usuario",
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-usuario/:id",
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-usuario/:id",
    component: EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "crear-mascota/:id",
    component: CrearMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscar-mascota",
    component: BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-mascota/:id",
    component: EditarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-mascota/:id",
    component: EliminarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscar-plan",
    component: BuscarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-plan/:id",
    component: EditarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-plan/:id",
    component: EliminarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "crear-sucursal",
    component: CrearSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscar-sucursal",
    component: BuscarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-sucursal/:id",
    component: EditarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-sucursal/:id",
    component: EliminarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "crear-producto-servicio",
    component: CrearProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "buscar-producto-servicio",
    component: BuscarProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-producto-servicio",
    component: EditarProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-producto-servicio",
    component: EliminarProductoServicioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "crear-prospecto",
    component: CrearProspectoComponent,
  },
  {
    path: "buscar-prospecto",
    component: BuscarProspectoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "editar-prospecto",
    component: EditarProspectoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: "eliminar-prospecto/:id",
    component: EliminarProspectoComponent,
    canActivate: [ValidadorSesionGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
