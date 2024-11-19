import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.page.html',
  styleUrls: ['./cadastrar-animal.page.scss'],
})
export class CadastrarAnimalPage {

  nomeAnimal: string = '';
  especieSelecionada: string = '';
  sexoSelecionado: string = '';
  tamanhoSelecionado: string = '';
  idadeSelecionada: string = '';
  descricao: string = '';

  // fazer funcionalidade para criar animal...

}
