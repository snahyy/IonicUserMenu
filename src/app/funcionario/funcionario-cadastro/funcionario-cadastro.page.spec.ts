import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioCadastroPage } from './funcionario-cadastro.page';

describe('FuncionarioCadastroPage', () => {
  let component: FuncionarioCadastroPage;
  let fixture: ComponentFixture<FuncionarioCadastroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FuncionarioCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
