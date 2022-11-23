import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-eliminar-sucursal',
  templateUrl: './eliminar-sucursal.component.html',
  styleUrls: ['./eliminar-sucursal.component.css']
})
export class EliminarSucursalComponent {

  
  id: string = '';
  

  fgCrearUser: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'departamento':['', [Validators.required]],
    'ciudad':['', [Validators.required]],
    'direccion':['', [Validators.required]],
    'telefono':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioSucursal: SucursalService,
   private router: Router,
   private route: ActivatedRoute) {  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarSucursal();

  }

  BuscarSucursal(){
    this.servicioSucursal.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloSucursal) => {
      this.fgCrearUser.controls["id"].setValue(datos.id);
      this.fgCrearUser.controls["departamento"].setValue(datos.departamento);
      this.fgCrearUser.controls["ciudad"].setValue(datos.ciudad);
      this.fgCrearUser.controls["direccion"].setValue(datos.direccion);
      this.fgCrearUser.controls["telefono"].setValue(datos.telefono);
      
    });
  }

  EliminarSucursal(){
    let id=this.fgCrearUser.controls["id"].value;
    let nombre=this.fgCrearUser.controls["departamento"].value;
    let foto=this.fgCrearUser.controls["ciudad"].value;
    let estado=this.fgCrearUser.controls["direccion"].value;
    let especie=this.fgCrearUser.controls["telefono"].value;


    let m = new ModeloSucursal();
    m.id = this.id;
    m.departamento = nombre;
    m.ciudad = foto;
    m.direccion = estado;
    m.telefono = especie;
   

    
    this.servicioSucursal.EliminarSucursal(m.id).subscribe((datos: ModeloSucursal) => {
      alert("Sucursal Eliminada correctamente");
      this.router.navigate(['administracion/buscar-sucursal'])


    }, (error: any) =>{
      alert("error eliminando Sucursal");
    })
   
  }


}
