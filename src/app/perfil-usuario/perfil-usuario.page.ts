import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

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
  id: any;
  dadosUsuario : any;
  usuarioLogadoeDoador : boolean = false;
  animaisUsuario : any;

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

  constructor(private apiServices : ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
      }

    this.usuarioLogadoEDoador();
    this.getAnimaisDoador()
    console.log(this.apiServices.infoUsuario)
    });
}
  async getDadosUsuario(){
    const data :any = await this.apiServices.getDoadorUnico(this.id).toPromise()
    this.dadosUsuario = data;
  }

  async usuarioLogadoEDoador(){
    await this.getDadosUsuario()
    console.log(this.apiServices.infoUsuario.id_user)
    if(this.apiServices.infoUsuario.id_user === this.dadosUsuario.id_user){
      this.usuarioLogadoeDoador = true;
    }  
  }

  getAnimaisDoador(){
    this.apiServices.getAnimaisDoador(this.id).subscribe(
      (data)=>{
        this.animaisUsuario = data;
      }
    )
  }

}
