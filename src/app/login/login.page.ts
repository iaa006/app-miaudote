import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';

  constructor(private alertController: AlertController) {}

  async login() {
    if (this.usuario === 'admin' && this.senha === '123456') {
      const alertaSucesso = await this.alertController.create({
        header: 'Bem-vindo!',
        message: 'Login realizado com sucesso.',
        buttons: ['OK'],
      });
      await alertaSucesso.present();
    } else {
      const alertaErro = await this.alertController.create({
        header: 'Erro',
        message: 'Usuário ou senha inválidos.',
        buttons: ['Tentar novamente'],
      });
      await alertaErro.present();
    }
  }

  async esqueciSenha() {
    const alertaEsqueciSenha = await this.alertController.create({
      header: 'Esqueci a senha',
      message: 'Por favor, entre em contato com o suporte para redefinir sua senha.',
      buttons: ['OK'],
    });
    await alertaEsqueciSenha.present();
  }

  cadastrar() {
    console.log('Redirecionar para tela de cadastro');
  }

  continuarSemSessao() {
    console.log('Usuário optou por continuar sem sessão');
  }
}
