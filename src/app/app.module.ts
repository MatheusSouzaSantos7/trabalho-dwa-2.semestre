import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ShowUserComponent } from './usuario/show-user/show-user.component';
import { AddEditUserComponent } from './usuario/add-edit-user/add-edit-user.component';
import { PreferenciaAssuntoComponent } from './preferencia-assunto/preferencia-assunto.component';
import { ShowAssuntoComponent } from './preferencia-assunto/show-assunto/show-assunto.component';
import { PostagemComponent } from './postagem/postagem.component';
import { ShowPostagemComponent } from './postagem/show-post/show-postagem.component'; // Matheus
import { AddEditPostComponent } from './postagem/add-edit-post/add-edit-post.component'; // Matheus
import { PostagemModule } from './postagem/modules-postagem/postagem.module' // Matheus
import { ComentarioComponent } from './comentario/comentario.component';
import { AddEditComentComponent } from './comentario/add-edit-coment/add-edit-coment.component';
import { ShowComentComponent } from './comentario/show-coment/show-coment.component';
import { SeguirComponent } from './seguir/seguir.component';
import { ShowSeguiComponent } from './seguir/show-segui/show-segui.component';
import { AddEditSeguiComponent } from './seguir/add-edit-segui/add-edit-segui.component';
import { SharedService } from './shared.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { LoginComponent } from './usuario/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor-token/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ShowUserComponent,
    AddEditUserComponent,
    PreferenciaAssuntoComponent,
    ShowAssuntoComponent,
    PostagemComponent,
    // ShowPostagemComponent,
    // AddEditPostComponent,
    ComentarioComponent,
    AddEditComentComponent,
    ShowComentComponent,
    SeguirComponent,
    ShowSeguiComponent,
    AddEditSeguiComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PostagemModule  
  ],
  providers: [SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
