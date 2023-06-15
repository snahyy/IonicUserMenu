import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage {
  dataSelecionada: string | undefined;
  pacientes = [
    {
      nome: 'Lucas Ferreira',
      idade: 56,
      observacoes: 'Tomar remédio com comida',
      remedios: 'Ibuprofeno, Paracetamol'
    },
    {
      nome: 'Maria da Silva',
      idade: 95,
      observacoes: 'Evitar alimentos com glúten',
      remedios: 'Omeprazol, Sinvastatina'
    },
    {
      nome: 'João Santos',
      idade: 75,
      observacoes: 'Não tomar remédio com álcool',
      remedios: 'Metformina, Losartana'
    }
  ];

  constructor(private router: Router) { }
  ngOnInit() {
  }

  paciente() {
    {
      console.log('io')
      this.router.navigate(['/paciente']);
}
}}