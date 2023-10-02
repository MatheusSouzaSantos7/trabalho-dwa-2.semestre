import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  UrlFotoUsuario: string = 'caminho/para/imagem-do-usuario.jpg';
  NomeUsuario: string = 'Nome do Usuário';
  NovaPostagem: string = '';

// Ações dos métodos relacionados a criar nova postagem
  enviarPostagem() {
    /* Por aqui, deverá enviar o comentário para o back-end e processar a lógica necessária.
    Você pode usar um serviço para lidar com a chamada HTTP para o back-end.
    Após o envio bem-sucedido, você pode limpar o campo de comentário, se necessário.
    Por exemplo, você pode enviar o comentário usando um serviço Angular HttpClient. */
  }

  limparPostagem() {
    this.NovaPostagem = ''; // Limpa o campo de comentário
  }
}
