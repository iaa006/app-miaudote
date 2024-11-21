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
  dadosSolicitacoes : any[] = [];



  constructor(private apiServices : ApiService, private route: ActivatedRoute, private router: Router) { }

  @ViewChild('deleteModal') deleteModal!: IonModal;
  @ViewChild('rejectModal') rejectModal!: IonModal;


  navegacaoEditar() {
    this.router.navigate(['/atualizar-animal']);
  }
  
  deleteData() {
    console.log('Deletando...');
    //funcionalidade pra dar o delete
    this.deleteModal.dismiss(null, 'confirm');
  }

  cancelDelete() {
    this.deleteModal.dismiss(null, 'cancel');
  }
  
  rejeitarAdocao() {
    console.log('rejeitando...');
    //funcionalidade pra rejeitar
    this.rejectModal.dismiss(null, 'confirm');
  }

  cancelReject() {
    this.rejectModal.dismiss(null, 'cancel');
  }


  ngOnInit() {
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
      }
    });

    this.usuarioLogadoEDoador();
  }
  async usuarioLogadoEDoador(){
    await this.getDadosAnimal()
    console.log(this.apiServices.infoUsuario.id_user)
    if(this.apiServices.infoUsuario.id_user === this.dadosAnimal.id_doador){
      this.usuarioLogadoeDoador = true;
    }
  }
   async getDadosAnimal(){
    console.log(this.id)
    const data :any = await this.apiServices.getAnimalUnico(this.id).toPromise()
    this.dadosAnimal = data
  }
  getSolicitacoes(){
    this.apiServices.getSolicitacoesAnimal(this.id).subscribe((data: any) =>{
      this.dadosSolicitacoes = data;
    })
  }

}
