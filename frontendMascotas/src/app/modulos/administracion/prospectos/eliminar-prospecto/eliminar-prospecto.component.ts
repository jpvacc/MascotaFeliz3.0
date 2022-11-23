import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-eliminar-prospecto',
  templateUrl: './eliminar-prospecto.component.html',
  styleUrls: ['./eliminar-prospecto.component.css']
})
export class EliminarProspectoComponent {

  id: string = '';
  

  fgCrearUser: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'comentario': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectoService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProspecto();

  }

  BuscarProspecto() {
    this.servicioProspecto.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloProspecto) => {
      this.fgCrearUser.controls["id"].setValue(datos.id);
      this.fgCrearUser.controls["nombre"].setValue(datos.nombre);
      this.fgCrearUser.controls["apellido"].setValue(datos.apellido);
      this.fgCrearUser.controls["celular"].setValue(datos.celular);
      this.fgCrearUser.controls["correo"].setValue(datos.correo);
      this.fgCrearUser.controls["comentario"].setValue(datos.comentario);

    });
  }

  EliminarProspecto() {

    let nombre = this.fgCrearUser.controls["nombre"].value;
    let apellido = this.fgCrearUser.controls["apellido"].value;
    let celular = this.fgCrearUser.controls["celular"].value;
    let correo = this.fgCrearUser.controls["correo"].value;
    let comentario = this.fgCrearUser.controls["comentario"].value;

    let u = new ModeloProspecto();
    u.id = this.id;
    u.nombre = nombre;
    u.apellido = apellido;
    u.celular = celular;
    u.correo = correo;
    u.comentario = comentario;


    this.servicioProspecto.EliminarProspecto(u.id).subscribe((datos: ModeloProspecto) => {
      alert("solicitud eliminada correctamente");
      this.router.navigate(['administracion/buscar-prospecto'])


    }, (error: any) => {
      alert("error eliminando prospecto");
    })

  }
}
