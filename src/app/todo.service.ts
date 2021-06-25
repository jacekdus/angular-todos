import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: string[] = [];

  constructor() { }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  deleteTodo(todo: string) {
    this.todos = this.todos.filter(el => el !== todo);
  }

  getTodos() {
    return this.todos;
  }
}
