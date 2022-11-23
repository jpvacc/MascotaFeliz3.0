import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPlan } from '../modelos/plan.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = `http://localhost:3000`;
  token: string = " ";
  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }


  ObtenerRegistros(): Observable<ModeloPlan[]>{

    return this.http.get<ModeloPlan[]>(`${this.url}/plans`)
  }

  ObtenerRegistrosPorId(id: string): Observable<ModeloPlan>{

    return this.http.get<ModeloPlan>(`${this.url}/plans/${id}`);
  }



  CrearPlan(plan: ModeloPlan): Observable<ModeloPlan>{
    return this.http.post<ModeloPlan>(`${this.url}/plans`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })

  }

  EditarPlan(plan: ModeloPlan): Observable<ModeloPlan>{
    return this.http.put<ModeloPlan>(`${this.url}/plans/${plan.id}`, plan, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })

  }

  EliminarPlan(id: string): Observable<any>{
    return this.http.delete(`${this.url}/plans/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })

  }
}
