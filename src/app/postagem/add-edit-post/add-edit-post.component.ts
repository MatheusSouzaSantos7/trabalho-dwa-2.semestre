import { Component } from '@angular/core';
import { SeuServicoDePostagem } from '../services-postagem/seu-servico-de-postagem.service'; // Importando o serviço aqui
import { AddEditPostModule } from '../modules-postagem/add-edit-post.module'

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent {
  NovaPostagem: string = '';
  respostaDoServidor: string = '';

  constructor(private seuServico: SeuServicoDePostagem) {}

  
  adicionarPostagem() {
    this.seuServico.adicionarPostagem(this.NovaPostagem).subscribe(
      (res) => {
        if (res.length > 500) {
          this.respostaDoServidor = 'Erro: A postagem deve ter menos de 500 caracteres';
        }
        else{
          // Armazena a resposta do servidor para exibição na interface
          this.respostaDoServidor = res;
          // Limpa o campo de postagem após o envio
          this.NovaPostagem = '';
        }
      },
      (error) => {
        // Em caso de erro na requisição, exibe uma mensagem de erro
        console.error('Erro na requisição:', error);
        this.respostaDoServidor = 'Erro ao processar a solicitação.';
      }
    );
  }
}