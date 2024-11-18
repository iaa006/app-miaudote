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
    if (this.usuario === 'teste' && this.senha === '123456') {
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Login realizado com sucesso!',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Credenciais inválidas.',
        buttons: ['OK'],
      });
      await alert.present();
    }
}}
