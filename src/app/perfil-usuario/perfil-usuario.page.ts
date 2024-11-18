import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage {
  @ViewChild(IonModal) modal!: IonModal;

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


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {

    this.message = `Filtros aplicados: 
      Estado: ${this.estadoSelecionado || 'Todos'}, 
      Cidade: ${this.cidade || 'Todas'}, 
      Espécie: ${this.especieSelecionada || 'Todos'}, 
      Sexo: ${this.sexoSelecionado || 'Todos'}, 
      Tamanho: ${this.tamanhoSelecionado || 'Todos'}, 
      Idade: ${this.idadeSelecionada || 'Todos'}, 
      Situação: ${this.situacaoSelecionada || 'Todos'}.`;

    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = ev.detail.data || this.message;
    }
  }

}
