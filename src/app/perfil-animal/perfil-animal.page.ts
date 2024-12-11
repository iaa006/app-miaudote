import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.page.html',
  styleUrls: ['./perfil-animal.page.scss'],
})
export class PerfilAnimalPage implements OnInit {
  id : number = 1;
  dadosAnimal : any;
  usuarioLogadoeDoador : boolean = false;
  dadosSolicitacoes : any;
  usuarioLogado:any;

  constructor(private apiServices : ApiService, private route: ActivatedRoute, private router: Router) { }

  @ViewChild('deleteModal') deleteModal!: IonModal;
  @ViewChild('rejectModal') rejectModal!: IonModal;
  @ViewChild('acceptModal') acceptModal!: IonModal;
  @ViewChild('adocaoModal') adocaoModal!: IonModal;


  navegacaoEditar() {
    this.router.navigate([`/atualizar-animal/${this.id}`]);
  }
  
  deleteData() {
    console.log('Deletando...');
    this.apiServices.deleteAnimal(this.id).subscribe()
    this.deleteModal.dismiss(null, 'confirm');
    this.router.navigate([`/home/`]);
  }

  cancelDelete() {
    this.deleteModal.dismiss(null, 'cancel');
  }
  
  rejeitarAdocao(idSolicitacao: any) {
    console.log('rejeitando...');
    this.apiServices.putRecusarSolicitacao(idSolicitacao).subscribe()
    this.rejectModal.dismiss(null, 'confirm');
  }

  cancelReject() {
    this.rejectModal.dismiss(null, 'cancel');
  }

  aceitarAdocao(idSolicitacao: any) {
    console.log('aceitando...');
    this.apiServices.putAceitarSolicitacao(idSolicitacao).subscribe()
    this.acceptModal.dismiss(null, 'confirm');
  }

  cancelAccept() {
    this.acceptModal.dismiss(null, 'cancel');
  }

  adotar() {
    console.log('solicitando adoção...');
    const data_tempo = new Date()
    const data = {
      id_animal: this.dadosAnimal.id_animal, 
      data_solicitacao: `${data_tempo.getFullYear()}-${data_tempo.getMonth()}-${data_tempo.getDate()}`, 
      hora_solicitacao: `${data_tempo.getHours()}:${data_tempo.getMinutes()}:${data_tempo.getSeconds()}`, 
      'status_solicitacao': 'Pendente'
    };
    this.apiServices.postSolicitacao(data).subscribe();
    this.adocaoModal.dismiss(null, 'confirm');
  }

  cancelAdocao() {
    this.adocaoModal.dismiss(null, 'cancel');
  }


  ngOnInit() {
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
      }
    });
    this.usuarioLogado = this.apiServices.infoUsuario

    this.getDadosAnimal();
    if(this.usuarioLogadoeDoador){
      this.getSolicitacoes()
    }
    console.log(this.usuarioLogadoeDoador)
  }
  
  async getDadosAnimal(){
    console.log(this.id)
    const data :any = await this.apiServices.getAnimalUnico(this.id).toPromise()
    this.dadosAnimal = data.animal;
    this.usuarioLogadoeDoador = data.usuarioProprietario;
  }
  async getSolicitacoes(){
    const data = this.apiServices.getSolicitacoesAnimal(this.id).toPromise()
    this.dadosSolicitacoes = data;
  }

  logout(){
    this.router.navigate(["/login"])
  }
  home(){
    this.router.navigate(['/home'])

  }

}
