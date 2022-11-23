import { Component } from '@angular/core';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-buscar-prospecto',
  templateUrl: './buscar-prospecto.component.html',
  styleUrls: ['./buscar-prospecto.component.css']
})
export class BuscarProspectoComponent {

  listadoRegistros: ModeloProspecto[] = [];

  constructor(private prospectoServicio: ProspectoService){}

  ngOnInit(): void {
    this.ObtenerListaProspectos();
    
  }

  ObtenerListaProspectos(){
    this.prospectoServicio.ObtenerRegistros().subscribe((datos: ModeloProspecto[]) => {
      this.listadoRegistros = datos;
    })

  }

}
