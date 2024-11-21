import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';
  private token : string='';
  private retornoLogin : any;

  constructor(private alertController: AlertController, private apiServices:ApiService, private router: Router) {}

  async postLogin(){
    const data :any = await this.apiServices.postLogin({id_user: this.usuario, senha: this.senha}).toPromise()
    this.retornoLogin = data;
  }

  async logar(){
    await this.postLogin();
    console.log(this.retornoLogin)
    if(this.retornoLogin.token){
      this.apiServices.authToken = this.retornoLogin.token;
      this.router.navigate(['/home'])
    }
    console.log(this.apiServices.authToken)
  }
  cadastrar() {
    console.log('Redirecionar para tela de cadastro');
  }

  continuarSemSessao() {
    console.log('Usuário optou por continuar sem sessão');
  }
}
