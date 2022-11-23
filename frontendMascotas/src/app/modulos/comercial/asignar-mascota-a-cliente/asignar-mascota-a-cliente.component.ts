import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaUsuarioService } from 'src/app/servicios/mascota-usuario.service';


@Component({
  selector: 'app-asignar-mascota-a-cliente',
  templateUrl: './asignar-mascota-a-cliente.component.html',
  styleUrls: ['./asignar-mascota-a-cliente.component.css']
})
export class AsignarMascotaAClienteComponent implements OnInit {

  id: string = '';

  listadoRegistros: ModeloMascota[] = [];

  constructor(private mascotaUsuarioServicio: MascotaUsuarioService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.ObtenerListaMascotas();
  }

  ObtenerListaMascotas(){
    this.mascotaUsuarioServicio.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota[]) => {
      this.listadoRegistros = datos;
    })

  }

}
