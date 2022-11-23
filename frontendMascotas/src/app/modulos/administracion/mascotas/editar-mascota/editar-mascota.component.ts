import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PlanService } from 'src/app/servicios/plan.service';


@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent {

  id: string = '';
  listadoRegistros: ModeloPlan[] = [];
  

  fgCrearUser: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'comentario':['', [Validators.required]],
    'usuarioId':['', [Validators.required]],
    'planId':['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
   private router: Router,
   private route: ActivatedRoute,
   private planServicio: PlanService) {  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
    this.ObtenerListaPlanes()

  }

  ObtenerListaPlanes(){
    this.planServicio.ObtenerRegistros().subscribe((datos: ModeloPlan[]) => {
      this.listadoRegistros = datos;
    })

  }


  BuscarMascota(){
    this.servicioMascota.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgCrearUser.controls["id"].setValue(datos.id);
      this.fgCrearUser.controls["nombre"].setValue(datos.nombre);
      this.fgCrearUser.controls["foto"].setValue(datos.foto);
      this.fgCrearUser.controls["estado"].setValue(datos.estado);
      this.fgCrearUser.controls["especie"].setValue(datos.especie);
      this.fgCrearUser.controls["comentario"].setValue(datos.comentario);
      this.fgCrearUser.controls["usuarioId"].setValue(datos.usuarioId);
      this.fgCrearUser.controls["planId"].setValue(datos.planId);
    });
  }

  EditarMascota(){
    let id=this.fgCrearUser.controls["id"].value;
    let nombre=this.fgCrearUser.controls["nombre"].value;
    let foto=this.fgCrearUser.controls["foto"].value;
    let estado=this.fgCrearUser.controls["estado"].value;
    let especie=this.fgCrearUser.controls["especie"].value;
    let comentario=this.fgCrearUser.controls["comentario"].value;
    let usuarioId=this.fgCrearUser.controls["usuarioId"].value;
    let planId=this.fgCrearUser.controls["planId"].value;


    let m = new ModeloMascota();
    m.id = this.id;
    m.nombre = nombre;
    m.foto = foto;
    m.estado = estado;
    m.especie = especie;
    m.comentario = comentario;
    m.usuarioId = usuarioId;
    m.planId = planId;
   

    
    this.servicioMascota.EditarMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Mascota Actualizada correctamente");
      this.router.navigate(['administracion/buscar-usuario'])


    }, (error: any) =>{
      alert("error actualizando Mascota");
    })
   
  }

}
