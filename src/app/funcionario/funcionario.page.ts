import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.page.html',
  styleUrls: ['./funcionario.page.scss'],
})

export class FuncionarioPage implements OnInit {

  nome_funcionario: string = "";
  data_nascimento: string = "";
  cpf: string = "";
  endereco: string = "";
  telefone: string = "";

  constructor() {}

  ngOnInit() {}

  cadastrar() {
    // Aqui você pode implementar a lógica para realizar o cadastro
    console.log('Nome:', this.nome_funcionario);
    console.log('Data de Nascimento:', this.data_nascimento);
    console.log('CPF:', this.cpf);
    console.log('Endereço:', this.endereco);
    console.log('Telefone:', this.telefone);
  }

}
