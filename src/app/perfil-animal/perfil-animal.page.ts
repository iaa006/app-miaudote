import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-animal',
  templateUrl: './perfil-animal.page.html',
  styleUrls: ['./perfil-animal.page.scss'],
})
export class PerfilAnimalPage implements OnInit {
  id : number = 1;
  dadosAnimal : any[] = [];
  dadosSolicitacoes : any[] = [];
  constructor(private apiServices : ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id = parametros['id']
      }
    });

    this.getDadosAnimal();
  }

  getDadosAnimal(){
    console.log(this.id)
    this.apiServices.getAnimalUnico(this.id).subscribe((data: any) =>{
      this.dadosAnimal = data;
    })
  }
  getSolicitacoes(){
    this.apiServices.getSolicitacoesAnimal(this.id).subscribe((data: any) =>{
      this.dadosSolicitacoes = data;
    })
  }
}
