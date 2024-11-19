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
  @ViewChild(IonModal) modal!: IonModal;
  public animais: any[] = []
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


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
        this.modal.dismiss(null, 'confirm');
        this.filtrarAnimais();
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
      this.animais = data;
      console.log(data)
    })
  }

  filtrarAnimais(){
    this.apiServices.getAnimaisFiltrados(this.sexoSelecionado, this.especieSelecionada, this.estadoSelecionado, this.cidade, this.tamanhoSelecionado, this.idadeSelecionada, this.situacaoSelecionada).subscribe((data: any) =>{
      this.animais = data;
      console.log(data)
    })
  }
}

