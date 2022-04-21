import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  // le nom de la todolist dans la database du navigateur
  private key: string = 'todo';

  public sauvegarder(todos: Todo[]): void {
    // Conversion de notre variable en JSON
    const todosConverties = JSON.stringify(todos);

    // Sauvegarde de nos données dans le navigateur
    localStorage.setItem(this.key, todosConverties);
  }

  public restorer(): Todo[] {
    // Récupération des données dans le navigateur au format JSON
    const todosConverties = localStorage.getItem(this.key);

    // on teste si des données sont bien présente
    if (todosConverties) {
      // Conversion de nos données JSON en variable
      const todosDeConverties = JSON.parse(todosConverties);

      // On retourne nos todolist et on indique que c'est bien une list de Todo
      return todosDeConverties as Todo[];
    }

    // Si aucune donnée n'est présente dans le navigateur on lui retourne une TodoList Vide
    return [];
  }
}
