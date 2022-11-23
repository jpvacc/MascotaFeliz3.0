import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as cryptoJS from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
//const cryptoJS = require("cryptojs");

@Component({
  selector: 'app-identififcacion',
  templateUrl: './identififcacion.component.html',
  styleUrls: ['./identififcacion.component.css']
})
export class IdentififcacionComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'usuario':['', [Validators.required, Validators.email]],
    'clave':['', [Validators.required]],
  });
  

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) {  }

  ngOnInit(): void {
  }
 
  IdentificarUsuario(){
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();

    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe({
      next: (datos: any) => {
        //ok
        this.servicioSeguridad.AlmacenarSesion(datos);
        this.router.navigate(['/inicio'])
      },
      error: (error: any) => {
        // no ok 
        alert("datos no validos")
      }

    });
    
  }

}
