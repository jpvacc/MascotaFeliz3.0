import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-eliminar-plan',
  templateUrl: './eliminar-plan.component.html',
  styleUrls: ['./eliminar-plan.component.css']
})
export class EliminarPlanComponent {

  id: string = '';
  

  fgCrearUser: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
   private router: Router,
   private route: ActivatedRoute) {  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();

  }

  BuscarPlan(){
    this.servicioPlan.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloPlan) => {
      this.fgCrearUser.controls["id"].setValue(datos.id);
      this.fgCrearUser.controls["nombre"].setValue(datos.nombre);
      this.fgCrearUser.controls["descripcion"].setValue(datos.descripcion);
      this.fgCrearUser.controls["precio"].setValue(datos.precio);
    
      
    });
  }

  EliminarPlan(){
    let id=this.fgCrearUser.controls["id"].value;
    let nombre=this.fgCrearUser.controls["nombre"].value;
    let descripcion=this.fgCrearUser.controls["descripcion"].value;
    let precio=parseInt(this.fgCrearUser.controls["precio"].value);


    let m = new ModeloPlan();
    m.id = this.id;
    m.nombre = nombre;
    m.descripcion = descripcion;
    m.precio = precio;

    
    this.servicioPlan.EliminarPlan(m.id).subscribe((datos: ModeloPlan) => {
      alert("Plan Eliminado correctamente");
      this.router.navigate(['administracion/buscar-plan'])


    }, (error: any) =>{
      alert("error eliminando Plan");
    })
   
  }

}
