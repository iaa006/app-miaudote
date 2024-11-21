import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';
  private retornoLogin : any;

  constructor(private apiServices:ApiService, private router: Router, private storageServices : StorageService) {}

  async postLogin(){
    const data :any = await this.apiServices.postLogin({nome_usuario: this.usuario, password: this.senha}).toPromise()
    this.retornoLogin = data;
  }

  async logar(){
    await this.postLogin();
    console.log(this.retornoLogin)
    if(this.retornoLogin.token){
      this.storageServices.set('token', this.retornoLogin.token)
      console.log(this.storageServices.get('token'))
      this.storageServices.set('usuario', this.retornoLogin.usuario)
      this.router.navigate(['/home'])
    }
  }
  cadastrar() {
    console.log('Redirecionar para tela de cadastro');
  }

  continuarSemSessao() {
    console.log('Usuário optou por continuar sem sessão');
  }
}
