import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  etapa: number = 1; 
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
      nome: [''],
      email: [''],
      telefone: [''],
      tipoCadastro: [''],
      documento: [''], 
    });

    this.enderecoForm = this.formBuilder.group({
      estado: [''],
      cidade: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
    });

    this.usuarioForm = this.formBuilder.group({
      usuario: [''],
      senha: [''],
      confirmarSenha: [''],
    });

    this.bancarioForm = this.formBuilder.group({
      agencia: [''],
      conta: [''],
      responsavel: [''],
      chavePix: [''],
    });
  }

  senhaVisivel = false;

  toggleSenhaVisivel() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  proximaEtapa() {
    console.log('Etapa atual:', this.etapa);
    if (this.etapa < 4) {
      this.etapa++;
    }
    console.log('Próxima etapa:', this.etapa);
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
