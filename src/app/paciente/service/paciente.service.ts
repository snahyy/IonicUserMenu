import { HttpService } from './../../core/service/http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  get(){
   return this.httpService.get<PacienteService[]>(`${environment.api}/pacientes`)
  }
}
