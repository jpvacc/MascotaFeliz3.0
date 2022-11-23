import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaplanService } from 'src/app/servicios/mascotaplan.service';

@Component({
  selector: 'app-asignar-plan',
  templateUrl: './asignar-plan.component.html',
  styleUrls: ['./asignar-plan.component.css']
})
export class AsignarPlanComponent {

  id: string = '';

  listadoRegistros: ModeloMascota[] = [];

  constructor(private mascotaPlanServicio: MascotaplanService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.ObtenerListaMascotas();
  }

  ObtenerListaMascotas(){
    this.mascotaPlanServicio.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota[]) => {
      this.listadoRegistros = datos;
    })

  }

}


