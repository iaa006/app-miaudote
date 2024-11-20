import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAnimais(){
    return this.http.get("http://127.0.0.1:8000/api/animais/")
  }
  getDoadores(){
    return this.http.get("http://127.0.0.1:8000/api/usuarios/")
  }
  getAnimaisFiltrados(sexo:string, especie:string, estado:string, cidade:string, tamanho:string, idade:string, situacao:string,){
    //http://127.0.0.1:8000/api/animais/?sexo=M&especie=gato&idade=filhote&status=disponivel

    return this.http.get(`http://127.0.0.1:8000/api/animais/?sexo=${sexo}&especie=${especie}&idade=${idade}&status=${situacao}`)
  }
  getDoadoresFiltrados(estado:string, cidade:string, tipo: string){
    //http://127.0.0.1:8000/api/animais/?sexo=M&especie=gato&idade=filhote&status=disponivel
    

    return this.http.get(`http://127.0.0.1:8000/api/usuarios/?tipo=${tipo}&cidade=${cidade}&estado=${estado}`)
  }

  getExisteUsuario(id:string){
    return this.http.get(`http://127.0.0.1:8000/api/existe_usuario/?pk=${id}`)
  }

  alterarSenha(novosDados:any){
    return this.http.put(`http://127.0.0.1:8000/api/redefinir_senha/`, novosDados)
  }
}
