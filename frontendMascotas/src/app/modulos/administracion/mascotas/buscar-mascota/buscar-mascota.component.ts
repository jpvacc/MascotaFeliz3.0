import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent {

  listadoRegistros: ModeloMascota[] = [];
  


  constructor(private mascotaServicio: MascotaService) { }

  ngOnInit(): void {
    this.ObtenerListaMascotas();

  }



  ObtenerListaMascotas() {
    this.mascotaServicio.ObtenerRegistros().subscribe((datos: ModeloMascota[]) => {


      this.listadoRegistros = datos;
    })

  }

}
