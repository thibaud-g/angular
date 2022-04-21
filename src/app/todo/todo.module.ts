import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
// Importation du module outil des formulaires
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoPageComponent],
  imports: [
    CommonModule,
    // Module qui permet de lié une variable à un champ texte
    FormsModule,
  ],
})
export class TodoModule {}
