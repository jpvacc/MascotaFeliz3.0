import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgCrearUser: FormGroup = this.fb.group({
    'cedula':['', [Validators.required]],
    'nombres':['', [Validators.required]],
    'apellidos':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'correo':['', [Validators.required, Validators.email]],
    'rol':['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
   private router: Router) {  }


  ngOnInit(): void {

  }

  CrearUsuario(){
    
    let cedula=this.fgCrearUser.controls["cedula"].value;
    let nombres=this.fgCrearUser.controls["nombres"].value;
    let apellidos=this.fgCrearUser.controls["apellidos"].value;
    let telefono=this.fgCrearUser.controls["telefono"].value;
    let correo=this.fgCrearUser.controls["correo"].value;
    let rol=this.fgCrearUser.controls["rol"].value;

    let u = new ModeloUsuario();
    u.cedula = cedula;
    u.nombre = nombres;
    u.apellido = apellidos;
    u.telefono = telefono;
    u.correo = correo;
    u.rol = rol;

    
    this.servicioUsuario.CrearUsuario(u).subscribe((datos: ModeloUsuario) => {
      alert("usuario creado ok");
      this.router.navigate(['administracion/buscar-usuario'])


    }, (error: any) =>{
      alert("error creando usuario");
    })
   
  }
}


