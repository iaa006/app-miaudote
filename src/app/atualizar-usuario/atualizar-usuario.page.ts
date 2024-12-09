import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.page.html',
  styleUrls: ['./atualizar-usuario.page.scss'],
})
export class AtualizarUsuarioPage {
  constructor(private router: Router, private apiServices : ApiService, private route: ActivatedRoute ) { }
  selectedImage: string | null = null;

  @ViewChild('editEnderecoModal') editEnderecoModal!: IonModal;
  @ViewChild('editFotoModal') editFotoModal!: IonModal;
  id:string = '';
  dadosUsuario:any;
  ngOnInit() {
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
      }

    this.getDadosUsuario();
    console.log(this.apiServices.infoUsuario)
    });
}

  saveEditData() {
    console.log('Atualizado...');
    const dadosUp: Record<string, string | null>= {
                    id_user: this.id,
                    nome_completo:this.nomeCompleto,  
                    nome_usuario:this.nomeUsuario,  
                    email:this.email,  
                    telefone:this.telefone,  
                    estado:this.estadoSelecionado,  
                    cidade:this.cidade,  
                    logradouro:this.logradouro,  
                    numero:this.numCasa,  
                    complemento:this.complemento,  
                    descricao:this.descricao,
                    is_superuser: this.dadosUsuario.is_superuser,
                    is_staff: this.dadosUsuario.is_staff,
                    password: this.dadosUsuario.password,
                    responsavel: this.dadosUsuario.responsavel,
                    foto: this.dadosUsuario.foto,
                    agencia_bancaria: this.dadosUsuario.agencia_bancaria,
                    conta_bancaria: this.dadosUsuario.conta_bancaria,
                    chave_pix: this.dadosUsuario.chave_pix,
                    tipo_usuario: this.dadosUsuario.tipo_usuario} 
        for (let chave in dadosUp) {
          if (dadosUp[chave] === '') {
            dadosUp[chave] = null;
          }
        } 
        console.log(dadosUp)
    
    this.apiServices.putUsuario(this.id, dadosUp).subscribe((data) =>{
      console.log(data)
    })

    this.router.navigate([`/perfil-usuario/${this.id}`]);

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
  nomeCompleto: string = '';
  nomeUsuario: string = '';
  email: string = '';
  telefone: string = '';
  estadoSelecionado: string = '';
  cidade: string = '';
  logradouro: string = '';
  numCasa: string = '';
  complemento: string = '';
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

  async getDadosUsuario(){
    const data :any = await this.apiServices.getDoadorUnico(this.id).toPromise()
    console.log(data)
    this.dadosUsuario = data.usuario;
    this.nomeCompleto = data.usuario.nome_completo;
    this.nomeUsuario = data.usuario.nome_usuario;
    this.email = data.usuario.email;
    this.telefone = data.usuario.telefone;
    this.estadoSelecionado = data.usuario.estado;
    this.cidade = data.usuario.cidade;
    this.logradouro = data.usuario.logradouro;
    this.numCasa = data.usuario.numero;
    this.complemento = data.usuario.complemento;
    this.descricao = data.usuario.descricao;
  }
  
}