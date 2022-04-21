import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  // La variable qui va contenir nos todos, nous allons définir sa forme avec le Typage Todo[]
  // Les données par défaut de la todolist sont celle du service
  // Ce sont les données stockée dans le navigateur
  todos: Todo[] = this.todoService.restorer();

  // Le contenu du formulaire pour ajouter une Todo
  currentTodo: string = '';

  // Rajoute une todo à notre list
  addTodo(content: string): void {
    this.todos.push({ content: content });
  }

  // Retire une todo dans la todolist
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  // Sauvegarde les données dans le store
  sauvegarder(): void {
    this.todoService.sauvegarder(this.todos);
    alert('Données sauvegarder dans le navigateur');
  }

  // Rajouter ces arguments aux contructeur va faire en sorte que Angular injecte le service dans ce composant
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
}
