import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public verAnimaisOuDoadores : boolean = true; // True = ver animal - False = ver doadores
  @ViewChild(IonModal) modal!: IonModal;
  public dadosListagem: any[] = []
  public message: string = '';
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
  tipoDoadorSelecionado: string = '';

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
        this.modal.dismiss(null, 'confirm');
        if (this.verAnimaisOuDoadores){
          this.filtrarAnimais();
        }else{
          this.filtrarDoadores();
        }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = ev.detail.data || this.message;
    }
  
  }

  constructor(private apiServices: ApiService) {}

  ngOnInit(): void {
    this.getAnimais()
  }
  getAnimais(){
    this.apiServices.getAnimais().subscribe((data: any) =>{
      this.dadosListagem = data;
      console.log(data)
    })
  }

  getDoadores(){
    this.apiServices.getDoadores().subscribe((data: any) =>{
      this.dadosListagem = data;
      console.log(data)
    })
  }

  filtrarAnimais(){
    const filtros = [this.sexoSelecionado, this.especieSelecionada, this.estadoSelecionado, this.cidade, this.tamanhoSelecionado, this.idadeSelecionada, this.situacaoSelecionada]

      if (this.sexoSelecionado === 'Todos'){
        this.sexoSelecionado = ''
      }
      if (this.especieSelecionada === 'Todos'){
        this.especieSelecionada = ''
      }
      if (this.tamanhoSelecionado === 'Todos'){
        this.tamanhoSelecionado = ''
      }
      if (this.idadeSelecionada === 'Todos'){
        this.idadeSelecionada = ''
      }
      if (this.situacaoSelecionada === 'Todos'){
        this.situacaoSelecionada = ''
      }
      if (this.situacaoSelecionada === 'Adotado'){
        this.situacaoSelecionada = 'indisponivel'
      }
      if (this.situacaoSelecionada === 'Disponível'){
        this.situacaoSelecionada = 'disponivel'
      }

    console.log(filtros)
    this.apiServices.getAnimaisFiltrados(this.sexoSelecionado, this.especieSelecionada, this.estadoSelecionado, this.cidade, this.tamanhoSelecionado, this.idadeSelecionada, this.situacaoSelecionada).subscribe((data: any) =>{
      this.dadosListagem = data;
      console.log(data)
    })
  }

  filtrarDoadores(){
    if(this.tipoDoadorSelecionado === "Todos"){
      this.tipoDoadorSelecionado = ''
    }
    if(this.tipoDoadorSelecionado === "Pessoa Comum"){
      this.tipoDoadorSelecionado = 'PF'
    }
    if(this.tipoDoadorSelecionado === "Instituição"){
      this.tipoDoadorSelecionado = 'PJ'
    }
    this.apiServices.getDoadoresFiltrados(this.estadoSelecionado, this.cidade, this.tipoDoadorSelecionado).subscribe((data: any) =>{
      this.dadosListagem = data;
      console.log(data)
    })
  }

  verAnimais(){
    this.verAnimaisOuDoadores = true;
    this.getAnimais();
  }
  verDoador(){
    this.verAnimaisOuDoadores = false;
    this.getDoadores();
  }
}

