import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {

  public pagina1 :boolean = true;
  public idUsuario : string = '';
  public existeUsuario : boolean= false;
  public senha : string = '';
  public csenha : string = '';
  constructor(private apiServices: ApiService) { }

  ngOnInit() {
  }

  async verificarUsuario() {
    const data: any = await this.apiServices.getExisteUsuario(this.idUsuario).toPromise();
    console.log(data)
    this.existeUsuario = data.usuario;
  }
  
  async proximaPagina() {
    await this.verificarUsuario();
    console.log(this.existeUsuario);
    if (this.existeUsuario) {
      this.pagina1 = false;
    }
  }

  voltarPagina(){
    this.pagina1=true;
  }

  confirmarSenha(){
    if (this.senha === this.csenha){
      this.apiServices.alterarSenha({id_user:this.idUsuario, password:this.senha}).subscribe((data: any) =>{
        console.log(data)
      })
    }
  }
}
