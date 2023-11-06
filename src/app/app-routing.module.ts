import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { PreferenciaAssuntoComponent } from './preferencia-assunto/preferencia-assunto.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { PostagemComponent } from './postagem/postagem.component';
import { SeguirComponent } from './seguir/seguir.component';
import { ShowPostagemComponent } from './postagem/show-post/show-postagem.component'
import { AddEditPostComponent } from './postagem/add-edit-post/add-edit-post.component'
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  { path:'user', component:UsuarioComponent },
  //{ path:'assuntos', component:PreferenciaAssuntoComponent },
  { path:'comentarios', component:ComentarioComponent },
  { path:'postagens-criadas', component:ShowPostagemComponent },
  { path:'seguidores', component:SeguirComponent },
  { path: 'criar-postagem', component:AddEditPostComponent },
  { path: 'cadastro', component:CadastroComponent  },
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }