import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private apiServices : ApiService, private router : Router) {
    this.cadastroForm = this.formBuilder.group({
      nome_completo: [''],
      email: [''],
      telefone: [''],
      tipo_usuario: [''],
      id_user: [''], 
    });

    this.enderecoForm = this.formBuilder.group({
      estado: [''],
      cidade: [''],
      logradouro: [''],
      numero: [''],
      complemento: [''],
    });

    this.usuarioForm = this.formBuilder.group({
      nome_usuario: [''],
      password: [''],
      confirmarPassword: [''],
    });

    this.bancarioForm = this.formBuilder.group({
      agencia_bancaria: [''],
      conta_bancaria: [''],
      responsavel: [''],
      chave_pix: [''],
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
    let cadastroCompleto = {
      ...this.cadastroForm.value,
      ...this.enderecoForm.value,
      ...this.usuarioForm.value,
      ...this.bancarioForm.value,
      foto : null,
      descricao : null,

      is_staff: false,
      is_superuser: false,
    };

    if(cadastroCompleto.tipo_usuario === 'cpf'){
      cadastroCompleto.tipo_usuario = 'PF'
    }
    if(cadastroCompleto.tipo_usuario === 'cnpj'){
      cadastroCompleto.tipo_usuario = 'PJ'
    }

    for (let key in cadastroCompleto) {
      if (cadastroCompleto.hasOwnProperty(key)) {
        if (cadastroCompleto[key] === "") {
          cadastroCompleto[key] = null; 
        }
      }
    }

    delete cadastroCompleto.confirmarPassword

    this.apiServices.postCadastro(cadastroCompleto).subscribe((data) =>{
      console.log(data)
    })
    this.router.navigate(['/login']);
    console.log('Cadastro finalizado:', cadastroCompleto);
    alert('Cadastro concluído com sucesso!');
  }
}

