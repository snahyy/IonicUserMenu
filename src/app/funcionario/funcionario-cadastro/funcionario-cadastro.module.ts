import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioCadastroPageRoutingModule } from './funcionario-cadastro-routing.module';

import { FuncionarioCadastroPage } from './funcionario-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioCadastroPageRoutingModule
  ],
  declarations: [FuncionarioCadastroPage]
})
export class FuncionarioCadastroPageModule {}
