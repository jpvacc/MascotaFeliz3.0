import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent {

  fgCrearUser: FormGroup = this.fb.group({
    'departamento':['', [Validators.required]],
    'ciudad':['', [Validators.required]],
    'direccion':['', [Validators.required]],
    'telefono':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioSucursal: SucursalService,
   private router: Router) {  }


  ngOnInit(): void {

  }

  CrearSucursal(){
    
    let departamento=this.fgCrearUser.controls["departamento"].value;
    let ciudad=this.fgCrearUser.controls["ciudad"].value;
    let direccion=this.fgCrearUser.controls["direccion"].value;
    let telefono=this.fgCrearUser.controls["telefono"].value;
    


    let m = new ModeloSucursal();
    m.departamento = departamento;
    m.ciudad = ciudad;
    m.direccion = direccion;
    m.telefono = telefono;
 
   
    
    this.servicioSucursal.CrearSucursal(m).subscribe((datos: ModeloSucursal) => {
      alert("sucursal creada ok");
      this.router.navigate(['administracion/buscar-sucursal'])


    }, (error: any) =>{
      alert("error creando sucursal");
    })
   
  }

}
