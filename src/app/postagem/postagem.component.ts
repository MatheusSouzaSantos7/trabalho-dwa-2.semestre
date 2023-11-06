import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ShowPostagemComponent } from './show-post/show-postagem.component'; // Importe o serviço para buscar os comentários

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent {
  UrlFotoUsuario: string = 'caminho/para/imagem-do-usuario.jpg';
  NomeUsuario: string = 'Nome do Usuário';
  NovaPostagem: string = '';

  constructor(private ShowPostagemComponent: ShowPostagemComponent) {}

  enviarPostagem() {
    /* 
      Implemente a lógica para enviar a postagem para o back-end aqui.
      Você pode usar um serviço para lidar com a chamada HTTP para o back-end.
      Após o envio bem-sucedido, você pode limpar o campo de postagem, se necessário.
      Por exemplo, você pode enviar a postagem usando um serviço Angular HttpClient.
    */
  }

  limparPostagem() {
    this.NovaPostagem = ''; // Limpa o campo de postagem
  }
}

// Interface para representar um comentário
export interface Comment {
  id: number;
  userId: number;
  userName: string;
  userPhotoUrl: string;
  text: string;
}

// Descomente esta parte caso seja necessário carregar os comentários no ngOnInit
/*
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    // Ao inicializar o componente, carregue os comentários do serviço
    this.commentService.getComments().subscribe((data: Comment[]) => {
      this.comments = data;
    });
  }
}
*/
