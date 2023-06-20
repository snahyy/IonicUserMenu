import { PacienteService } from './service/paciente.service';
import { Component, OnInit } from '@angular/core';  


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {
paciente : PacienteService[];

  constructor() { }

 async ngOnInit() {
  this.paciente = await this.PacienteService.get();
  }

  

}
