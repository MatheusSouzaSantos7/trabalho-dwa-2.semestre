import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";
  constructor(private http:HttpClient) { }
  
  //usuario
  getUserlist():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/usuario/');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl + '/usuario/', val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl + '/usuario/', val);
  }
  delUser(val:any){
    return this.http.delete(this.APIUrl + '/usuario/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/SaveFile',val)
  }


  //assunto
  getAssuntoList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/preferenciaassunto/');
  }
  
  addAssunto(val: any) {
    return this.http.post(this.APIUrl + '/preferenciaassunto/', val);
  }
  
  updateAssunto(val: any) {
    return this.http.put(this.APIUrl + '/preferenciaassunto/', val);
  }
  
  delAssunto(val: any) {
    return this.http.delete(this.APIUrl + '/preferenciaassunto/' + val);
  }
  

  //postagem

  getPostList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/postagem/');
  }
  
  addPost(val: any) {
    return this.http.post(this.APIUrl + '/postagem/', val);
  }
  
  updatePost(val: any) {
    return this.http.put(this.APIUrl + '/postagem/', val);
  }
  
  delPost(val: any) {
    return this.http.delete(this.APIUrl + '/postagem/' + val);
  }
  

  //comentario

  getComentList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/comentario/');
  }
  
  addComent(val: any) {
    return this.http.post(this.APIUrl + '/comentario/', val);
  }
  
  updateComent(val: any) {
    return this.http.put(this.APIUrl + '/comentario/', val);
  }
  
  delComent(val: any) {
    return this.http.delete(this.APIUrl + '/comentario/' + val);
  }
  

  //seguir

  getSeguirList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/seguir/');
  }
  
  addSeguir(val: any) {
    return this.http.post(this.APIUrl + '/seguir/', val);
  }
  
  updateSeguir(val: any) {
    return this.http.put(this.APIUrl + '/seguir/', val);
  }
  
  delSeguir(val: any) {
    return this.http.delete(this.APIUrl + '/seguir/' + val);
  }
  
  
}
