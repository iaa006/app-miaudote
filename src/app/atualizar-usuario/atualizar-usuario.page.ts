import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.page.html',
  styleUrls: ['./atualizar-usuario.page.scss'],
})
export class AtualizarUsuarioPage {
  constructor(private router: Router) { }
  selectedImage: string | null = null;

  @ViewChild('editEnderecoModal') editEnderecoModal!: IonModal;
  @ViewChild('editFotoModal') editFotoModal!: IonModal;


  saveEditData() {
    console.log('Atualizado...');
    //funcionalidade pra dar o update

    this.router.navigate(['/perfil-usuario']);

  }

  cancelEdit() {
    this.router.navigate(['/perfil-usuario']);
  }

  saveEditEndereco() {
    console.log('Atualizando endereço...');
    //funcionalidade pra dar o update no endereço
    this.editEnderecoModal.dismiss(null, 'confirm');
  }

  cancelEditEndereco() {
    this.editEnderecoModal.dismiss(null, 'cancel');
  }

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
}

