import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent {


  id: string = '';
  

  fgCrearUser: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'comentario':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
   private router: Router,
   private route: ActivatedRoute) {  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();

  }

  BuscarMascota(){
    this.servicioMascota.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgCrearUser.controls["id"].setValue(datos.id);
      this.fgCrearUser.controls["nombre"].setValue(datos.nombre);
      this.fgCrearUser.controls["foto"].setValue(datos.foto);
      this.fgCrearUser.controls["estado"].setValue(datos.estado);
      this.fgCrearUser.controls["especie"].setValue(datos.especie);
      this.fgCrearUser.controls["comentario"].setValue(datos.comentario);
      
    });
  }

  EliminarMascota(){
    let id=this.fgCrearUser.controls["id"].value;
    let nombre=this.fgCrearUser.controls["nombre"].value;
    let foto=this.fgCrearUser.controls["foto"].value;
    let estado=this.fgCrearUser.controls["estado"].value;
    let especie=this.fgCrearUser.controls["especie"].value;
    let comentario=this.fgCrearUser.controls["comentario"].value;


    let m = new ModeloMascota();
    m.id = this.id;
    m.nombre = nombre;
    m.foto = foto;
    m.estado = estado;
    m.especie = especie;
    m.comentario = comentario;
   

    
    this.servicioMascota.EliminarMascota(m.id).subscribe((datos: ModeloMascota) => {
      alert("Mascota Eliminada correctamente");
      this.router.navigate(['administracion/buscar-usuario'])


    }, (error: any) =>{
      alert("error eliminando Mascota");
    })
   
  }

}
