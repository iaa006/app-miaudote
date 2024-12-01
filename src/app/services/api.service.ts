import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public authToken : string = '';
  public infoUsuario : any;
  private url_base : string = 'http://127.0.0.1:8000/api/';
  constructor(private http:HttpClient, private storage : StorageService) { }

  async tokenHeader(){
    await this.storage.get('token')?.then(value =>{
      this.authToken = value
    })
  }
  
  
  getAnimais(){
    console.log(this.authToken)
    return this.http.get(`${this.url_base}animais/`)
  }

  
  getDoadores(){
    const headers = new HttpHeaders()
      .set(`Authorization`, `Token ${this.authToken}`)
    return this.http.get(`${this.url_base}usuarios/`, { headers })
  }
  getAnimaisFiltrados(sexo:string, especie:string, estado:string, cidade:string, tamanho:string, idade:string, situacao:string,){
    //${this.url_base}animais/?sexo=M&especie=gato&idade=filhote&status=disponivel

    return this.http.get(`${this.url_base}animais/?sexo=${sexo}&especie=${especie}&idade=${idade}&status=${situacao}`)
  }
  getDoadoresFiltrados(estado:string, cidade:string, tipo: string){
    //${this.url_base}animais/?sexo=M&especie=gato&idade=filhote&status=disponivel
    

    return this.http.get(`${this.url_base}usuarios/?tipo=${tipo}&cidade=${cidade}&estado=${estado}`)
  }

  getExisteUsuario(id:string){
    return this.http.get(`${this.url_base}existe_usuario/?pk=${id}`)
  }

  alterarSenha(novosDados:any){
    return this.http.put(`${this.url_base}redefinir_senha/`, novosDados)
  }

  getAnimalUnico(id:any){
    return this.http.get(`${this.url_base}animal/${id}`)
  }
  getSolicitacoesAnimal(id_animal: any){
    return this.http.get(`http://`)
  }

  getDoadorUnico(id:any){
    const headers = new HttpHeaders()
      .set(`Authorization`, `Token ${this.authToken}`)
    return this.http.get(`${this.url_base}usuario/${id}`,  { headers })
  }

  getAnimaisDoador(id:any){
    return this.http.get(`${this.url_base}animais/doador/${id}`)
  }

  getAnimaisDoadorFiltrado(id:any, sexo:string, especie:string, estado:string, cidade:string, tamanho:string, idade:string, situacao:string,){
    return this.http.get(`${this.url_base}animais/doador/${id}?sexo=${sexo}&especie=${especie}&idade=${idade}&status=${situacao}`)
  }

  postLogin(dadosLogin:any){
    return this.http.post(`${this.url_base}login/`, dadosLogin)
  }

  postCadastro(dadosCadastro:any){
    return this.http.post(`${this.url_base}cadastrar/`, dadosCadastro)
  }

  deleteUsuario(id:any){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Token 344527c9384b0dbf3268658988efa0a6021ac2e5`
    });
    return this.http.delete(`${this.url_base}usuario/${id}`, { headers: httpHeaders })
  }

  putUsuario(id:any, dados:any){
    const headers = new HttpHeaders()
      .set(`Authorization`, `Token ${this.authToken}`)
    return this.http.put(`${this.url_base}usuario/${id}`, dados, { headers })

  }
}
