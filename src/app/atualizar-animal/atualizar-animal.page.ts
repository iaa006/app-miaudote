import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonModal } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-atualizar-animal',
  templateUrl: './atualizar-animal.page.html',
  styleUrls: ['./atualizar-animal.page.scss'],
})
export class AtualizarAnimalPage implements OnInit {
  id: any;
  dadosAnimal: any;
  usuarioLogado: any;
  constructor(private router: Router, private route : ActivatedRoute, private apiServices : ApiService) { }

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
    const dadosUp: Record<string, string | null> = {
    id_animal: this.dadosAnimal.id_animal,
    animal_nome: this.nomeAnimal,
    especie: this.especieSelecionada,
    idade: this.idadeSelecionada,
    tamanho: this.tamanhoSelecionado,
    sexo: this.sexoSelecionado,
    localizacao: this.dadosAnimal.localizacao,
    descricao: this.descricao,
    foto: this.dadosAnimal.foto,
    data_criacao: this.dadosAnimal.data_criacao,
    status: this.dadosAnimal.status,
    data_adocao: this.dadosAnimal.data_adocao,
    id_doador: this.dadosAnimal.id_doador,
    id_adotador: this.dadosAnimal.id_adotador,
    nome_doador: this.dadosAnimal.nome_doador,
    email_doador: this.dadosAnimal.email_doador,
    telefone_doador: this.dadosAnimal.telefone_doador
    };

    if (dadosUp['sexo'] === 'Macho'){
      dadosUp['sexo'] = 'M'
    }
    if (dadosUp['sexo'] === 'Fêmea'){
      dadosUp['sexo'] = 'F'
    }

    for (let chave in dadosUp) {
      if (dadosUp[chave] === '') {
        dadosUp[chave] = null;
      }
    } 

    this.apiServices.putAnimal(this.id, dadosUp).subscribe((data) =>{
      console.log(data)
    })

    this.router.navigate([`/perfil-animal/${this.id}`]);

  }

  cancelEdit() {
    this.router.navigate([`/perfil-animal/${this.id}`]);
  }

  ngOnInit(){
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
      }
    });
    
    
      this.usuarioLogado = this.apiServices.infoUsuario
    
    this.getDadosAnimal() 
  }

  async getDadosAnimal(){
    console.log(this.id)
    const data :any = await this.apiServices.getAnimalUnico(this.id).toPromise()
    this.dadosAnimal = data.animal;

    this.nomeAnimal = this.dadosAnimal.animal_nome;
    this.especieSelecionada= this.dadosAnimal.especie;
    if (this.dadosAnimal.sexo === 'M'){
      this.sexoSelecionado = 'Macho'
    }
    if (this.dadosAnimal.sexo === 'F'){
      this.sexoSelecionado = 'Fêmea'
    }
    this.sexoSelecionado = this.dadosAnimal.sexo;
    this.tamanhoSelecionado = this.dadosAnimal.tamanho;
    this.idadeSelecionada= this.dadosAnimal.idade;
    this.descricao = this.dadosAnimal.descricao;
    console.log(this.nomeAnimal)
  }
  logout(){
    this.router.navigate(["/login"])
  }
  home(){
    this.router.navigate(['/home'])

  }

}