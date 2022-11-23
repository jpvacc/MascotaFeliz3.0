import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent {

  id: string = '';
  contrasena: string = '';

  fgCrearUser: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'nombres':['', [Validators.required]],
    'apellidos':['', [Validators.required]],
    'telefono':['', [Validators.required]],
    'correo':['', [Validators.required, Validators.email]],
    'contrasena':['', [Validators.required]],
    'rol':['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
   private router: Router,
   private route: ActivatedRoute) {  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();

  }

  BuscarUsuario(){
    this.servicioUsuario.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloUsuario) => {
      this.fgCrearUser.controls["id"].setValue(datos.id);
      this.fgCrearUser.controls["cedula"].setValue(datos.cedula);
      this.fgCrearUser.controls["nombres"].setValue(datos.nombre);
      this.fgCrearUser.controls["apellidos"].setValue(datos.apellido);
      this.fgCrearUser.controls["telefono"].setValue(datos.telefono);
      this.fgCrearUser.controls["correo"].setValue(datos.correo);
      this.fgCrearUser.controls["contrasena"].setValue(datos.contrasena);
      this.fgCrearUser.controls["rol"].setValue(datos.rol);
    });
  }

  EliminarUsuario(){
    
    let cedula=this.fgCrearUser.controls["cedula"].value;
    let nombres=this.fgCrearUser.controls["nombres"].value;
    let apellidos=this.fgCrearUser.controls["apellidos"].value;
    let telefono=this.fgCrearUser.controls["telefono"].value;
    let correo=this.fgCrearUser.controls["correo"].value;
    let contrasena=this.fgCrearUser.controls["contrasena"].value;
    let rol=this.fgCrearUser.controls["rol"].value;

    let u = new ModeloUsuario();
    u.id = this.id;
    u.cedula = cedula;
    u.nombre = nombres;
    u.apellido = apellidos;
    u.telefono = telefono;
    u.correo = correo;
    u.contrasena = contrasena;
    u.rol = rol;

    
    this.servicioUsuario.EliminarUsuario(u.id).subscribe((datos: ModeloUsuario) => {
      alert("usuario eliminado correctamente");
      this.router.navigate(['administracion/buscar-usuario'])


    }, (error: any) =>{
      alert("error eliminando usuario");
    })
   
  }


}
