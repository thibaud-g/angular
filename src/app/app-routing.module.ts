import { GameComponent } from './game/page/game/game.component';

import { PageHumainComponent } from './humain/page/page-humain/page-humain.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Nous importons notre page composant dans le routeur
import { TodoPageComponent } from './todo/page/todo-page/todo-page.component';

const routes: Routes = [
  // Affiche le composant TodoPageComponent quand l'url est todo
  { path: 'todo', component: TodoPageComponent },
  {path: 'humain', component : PageHumainComponent},
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
