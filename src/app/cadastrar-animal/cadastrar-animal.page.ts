import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.page.html',
  styleUrls: ['./cadastrar-animal.page.scss'],
})
export class CadastrarAnimalPage {

  selectedImage: string | null = null;

  @ViewChild('addFotoModal') addFotoModal!: IonModal;


  nomeAnimal: string = '';
  especieSelecionada: string = '';
  sexoSelecionado: string = '';
  tamanhoSelecionado: string = '';
  idadeSelecionada: string = '';
  descricao: string = '';

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


  // fazer funcionalidade para criar animal...

}
