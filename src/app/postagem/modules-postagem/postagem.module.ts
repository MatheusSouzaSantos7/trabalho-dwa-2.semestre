import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';
import { ShowPostagemComponent } from '../show-post/show-postagem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddEditPostComponent,
    ShowPostagemComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [AddEditPostComponent, ShowPostagemComponent]
})
export class PostagemModule { }
