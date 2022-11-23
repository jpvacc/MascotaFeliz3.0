import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent {

  fgCrearUser: FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'descripcion':['', [Validators.required]],
    'precio':['', [Validators.required]],
 
  });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
   private router: Router) {  }


  ngOnInit(): void {

  }

  CrearPlan(){
    
    let nombre=this.fgCrearUser.controls["nombre"].value;
    let descripcion=this.fgCrearUser.controls["descripcion"].value;
    let precio=parseInt(this.fgCrearUser.controls["precio"].value);
 
    


    let m = new ModeloPlan();
    m.nombre = nombre;
    m.descripcion = descripcion;
    m.precio = precio;

 
   
    
    this.servicioPlan.CrearPlan(m).subscribe((datos: ModeloPlan) => {
      alert("plan creado ok");
      this.router.navigate(['administracion/buscar-plan'])


    }, (error: any) =>{
      alert("error creando plan");
    })
   
  }

}
