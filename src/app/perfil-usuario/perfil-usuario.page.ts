import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage {
  constructor(private router: Router) { }

  @ViewChild('filterModal') filterModal!: IonModal;
  @ViewChild('deleteModal') deleteModal!: IonModal;

  navegacaoEditar() {
    this.router.navigate(['/atualizar-usuario']);
  }
  navegacaoAnimal() {
    this.router.navigate(['/perfil-animal']);
  }
  navegacaoAddAnimal() {
    this.router.navigate(['/cadastrar-animal']);
  }

  deleteData() {
    console.log('Deletando...');
    //funcionalidade pra dar o delete
    this.deleteModal.dismiss(null, 'confirm');
  }

  cancelDelete() {
    this.deleteModal.dismiss(null, 'cancel');
  }

  message = 'Não foi selecionado nenhum filtro além do padrão.';
  estados: string[] = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
    'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
    'São Paulo', 'Sergipe', 'Tocantins'
  ];

  estadoSelecionado: string = '';
  cidade: string = '';
  especieSelecionada: string = '';
  sexoSelecionado: string = '';
  tamanhoSelecionado: string = '';
  idadeSelecionada: string = '';
  situacaoSelecionada: string = '';


  cancelFiltro() {
    this.filterModal.dismiss(null, 'cancel');
  }

  confirmFiltro() {

    this.message = `Filtros aplicados: 
      Estado: ${this.estadoSelecionado || 'Todos'}, 
      Cidade: ${this.cidade || 'Todas'}, 
      Espécie: ${this.especieSelecionada || 'Todos'}, 
      Sexo: ${this.sexoSelecionado || 'Todos'}, 
      Tamanho: ${this.tamanhoSelecionado || 'Todos'}, 
      Idade: ${this.idadeSelecionada || 'Todos'}, 
      Situação: ${this.situacaoSelecionada || 'Todos'}.`;

    this.filterModal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = ev.detail.data || this.message;
    }
  }

}
