import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PlanService } from 'src/app/servicios/plan.service';


@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent {

  idUser: string = '';
  listadoRegistros: ModeloPlan[] = [];

  fgCrearUser: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'comentario':['', [Validators.required]],
    'idUser':['', [Validators.required]],
    'planId':['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private route: ActivatedRoute,
   private router: Router,
   private planServicio: PlanService) {  }


  ngOnInit(): void {
    this.idUser = this.route.snapshot.params["id"];
    this.fgCrearUser.controls["idUser"].setValue(this.idUser);
    this.ObtenerListaPlanes();

  }

  ObtenerListaPlanes(){
    this.planServicio.ObtenerRegistros().subscribe((datos: ModeloPlan[]) => {
      this.listadoRegistros = datos;
    })

  }


  CrearMascota(){

    let nombre=this.fgCrearUser.controls["nombre"].value;
    let foto=this.fgCrearUser.controls["foto"].value;
    let estado=this.fgCrearUser.controls["estado"].value;
    let especie=this.fgCrearUser.controls["especie"].value;
    let comentario=this.fgCrearUser.controls["comentario"].value;
    let idUsuario=this.fgCrearUser.controls["idUser"].value;
    let planId=this.fgCrearUser.controls["planId"].value;



    let m = new ModeloMascota();
    m.nombre = nombre;
    m.foto = foto;
    m.estado = estado;
    m.especie = especie;
    m.comentario = comentario;
    m.usuarioId = this.idUser
    m.planId = planId
   
    
    this.servicioMascota.CrearMascota(m).subscribe((datos: ModeloMascota) => {
      alert("mascota creada ok");
      this.router.navigate(['administracion/buscar-usuario'])


    }, (error: any) =>{
      alert("error creando mascota");
    })
   
  }

}
