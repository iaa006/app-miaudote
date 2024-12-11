import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonModal } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.page.html',
  styleUrls: ['./cadastrar-animal.page.scss'],
})
export class CadastrarAnimalPage implements OnInit{

  selectedImage: string | null = null;

  @ViewChild('addFotoModal') addFotoModal!: IonModal;
  usuarioLogado: any;

  constructor(private apiServices: ApiService, private router : Router){}

  nomeAnimal: string = '';
  especieSelecionada: string = '';
  sexoSelecionado: string = '';
  tamanhoSelecionado: string = '';
  idadeSelecionada: string = '';
  descricao: string = '';
  estados: string[] = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
    'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
    'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins',
  ];
  estadoSelecionado: string = '';
  cidade: string = '';

  async selecionarImagem() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
      });

      this.selectedImage = image.dataUrl ? image.dataUrl : null;
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      this.selectedImage = null;
    }
  }

  closeAddFoto() {
    this.addFotoModal.dismiss(null, 'cancel');
  }

  cancelAddFoto() {
    this.selectedImage = null;
  }

  saveAddFoto() {
    if (this.selectedImage) {
      // funcionalidade pra adicionar a imagem no perfil
      console.log('Imagem salva');
      this.addFotoModal.dismiss(null, 'confirm');

    }
  }
  ngOnInit(): void {
    
    this.usuarioLogado = this.apiServices.infoUsuario
  }
  cancelAddAnimal(){
    this.router.navigate(['/home'])

  }

  saveAnimal(){
    const data_tempo = new Date()
    const dadosUp = {
      animal_nome: this.nomeAnimal,
        especie: this.especieSelecionada,
        idade: this.idadeSelecionada,
        tamanho: this.tamanhoSelecionado,
        sexo: this.sexoSelecionado,
        cidade: this.cidade,
        estado: this.estadoSelecionado,
        descricao: this.descricao,
        foto: "não tem",
        status: "disponivel",
        data_criacao: `${data_tempo.getFullYear()}-${data_tempo.getMonth()}-${data_tempo.getDate()}`,
        data_adocao: null,
        id_adotador: null,
    }

    if (dadosUp['sexo'] === 'Macho'){
      dadosUp['sexo'] = 'M'
    }
    if (dadosUp['sexo'] === 'Fêmea'){
      dadosUp['sexo'] = 'F'
    }


    this.apiServices.postAnimais(dadosUp).subscribe()
    
    this.router.navigate(['/home'])
  }
  // fazer funcionalidade para criar animal...
  logout(){
    this.router.navigate(["/login"])
  }
  home(){
    this.router.navigate(['/home'])

  }
}
