import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-atualizar-animal',
  templateUrl: './atualizar-animal.page.html',
  styleUrls: ['./atualizar-animal.page.scss'],
})
export class AtualizarAnimalPage {
  constructor(private router: Router) { }

  selectedImage: string | null = null;

  @ViewChild('editFotoModal') editFotoModal!: IonModal;

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

  closeEditFoto() {
    this.editFotoModal.dismiss(null, 'cancel');
  }

  cancelEditFoto() {
    this.selectedImage = null;
  }

  saveEditFoto() {
    if (this.selectedImage) {
      // funcionalidade pra atualizar a imagem no perfil
      console.log('Imagem salva');
      this.editFotoModal.dismiss(null, 'confirm');

    }
  }

  saveEditData() {
    console.log('Atualizado...');
    //funcionalidade pra dar o update

    this.router.navigate(['/perfil-animal']);

  }

  cancelEdit() {
    this.router.navigate(['/perfil-animal']);
  }


}