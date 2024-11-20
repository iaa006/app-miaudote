import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  etapa = 1;
  cadastroForm: FormGroup;
  enderecoForm: FormGroup;
  usuarioForm: FormGroup;
  bancarioForm: FormGroup;
  estados: string[] = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
    'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
    'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins',
  ];

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoCadastro: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
    });

    this.enderecoForm = this.formBuilder.group({
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
    });

    this.usuarioForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
    }, { validator: this.validarSenhas });

    this.bancarioForm = this.formBuilder.group({
      agencia: [''],
      conta: [''],
      responsavel: [''],
      chavePix: ['']
    });
  }

  get formControls() {
    return this.cadastroForm.controls;
  }

  get formControlsEndereco() {
    return this.enderecoForm.controls;
  }

  validarSenhas(formGroup: FormGroup) {
    const senha = formGroup.get('senha')?.value;
    const confirmarSenha = formGroup.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoConferem: true };
  }

  senhaVisivel = false;

  toggleSenhaVisivel() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  proximaEtapa() {
    if (this.etapa === 1 && this.cadastroForm.valid) {
      this.etapa++;
    } else if (this.etapa === 2 && this.enderecoForm.valid) {
      this.etapa++;
    } else if (this.etapa === 3 && this.usuarioForm.valid) {
      this.etapa++;
    }
  }

  voltarEtapa() {
    if (this.etapa > 1) {
      this.etapa--;
    }
  }

  finalizarCadastro() {
    const cadastroCompleto = {
      ...this.cadastroForm.value,
      ...this.enderecoForm.value,
      ...this.usuarioForm.value,
      dadosBancarios: this.bancarioForm.value,
    };
  
    console.log('Cadastro finalizado:', cadastroCompleto);
    alert('Cadastro concluído com sucesso!');
  }
}
