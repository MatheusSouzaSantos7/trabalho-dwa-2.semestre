import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-postagem.component.html',
  styleUrls: ['./show-postagem.component.css']
})

export class ShowPostagemComponent implements OnInit {
  postagens: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPostagens();
  }

  fetchPostagens() {
    this.http.get<any[]>('http://localhost:8000/postagens/').subscribe(
      (data: any[]) => {
        if (data && data.length > 0) {
          this.postagens = data.map(postagem => this.formatPostagem(postagem));
        } else {
          this.postagens = [{
            autor: 'Sistema',
            texto: 'Nenhuma postagem encontrada.',
          }];
        }
      },
      (error) => {
        console.error('Erro ao buscar as postagens:', error);
        this.postagens = [{
          autor: 'Sistema',
          texto: 'Erro ao acessar o sistema.',
        }];
      }
    );
  }
  

  formatPostagem(postagem: any): any {
    // Verifica e formata os campos faltantes
    postagem.autor = postagem.autor || '{nulo}';
    postagem.texto = postagem.texto || '{nulo}';
    
    return postagem;
  }
}