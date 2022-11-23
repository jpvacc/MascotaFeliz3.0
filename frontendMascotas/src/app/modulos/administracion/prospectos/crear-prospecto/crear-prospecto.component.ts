import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-crear-prospecto',
  templateUrl: './crear-prospecto.component.html',
  styleUrls: ['./crear-prospecto.component.css']
})
export class CrearProspectoComponent {

  fgCrearUser: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'celular':['', [Validators.required]],
    'correo':['', [Validators.required, Validators.email]],
    'comentario':['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectoService,
   private router: Router) {  }


  ngOnInit(): void {

  }

  CrearProspecto(){
    
    let nombre=this.fgCrearUser.controls["nombre"].value;
    let apellido=this.fgCrearUser.controls["apellido"].value;
    let celular=this.fgCrearUser.controls["celular"].value;
    let correo=this.fgCrearUser.controls["correo"].value;
    let comentario=this.fgCrearUser.controls["comentario"].value;

    let u = new ModeloProspecto();
    u.nombre = nombre;
    u.apellido = apellido;
    u.celular = celular;
    u.correo = correo;
    u.comentario = comentario;

    
    this.servicioProspecto.CrearProspecto(u).subscribe((datos: ModeloProspecto) => {
      alert("Solicitud enviada correctamente");
      this.router.navigate(['/inicio'])


    }, (error: any) =>{
      alert("error creando solicitud");
    })
   
  }

}
