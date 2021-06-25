import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title: string = '';

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todoService.addTodo(this.title);
  }
}
