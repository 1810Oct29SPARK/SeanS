import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string;


  // [
  //   new Todo(1, 'Priesthood Power', false, new Date()),
  //   new Todo(2, 'Health & Fitness', false, new Date()),
  //   new Todo(3, 'Japanese Fluency', false, new Date()),
  //   new Todo(4, 'Financial Stability', false, new Date()),
  //   new Todo(5, 'Packed & Ready', false, new Date()),
  // ]


  // todos = [
  //   {id: 1, description: 'Priesthood Power'},
  //   {id: 2, description: 'Health & Fitness'},
  //   {id: 3, description: 'Japanese Fluency'},
  //   {id: 4, description: 'Financial Stability'},
  //   {id: 5, description: 'Packed & Ready'}
  // ]
  // todo = {
  //   id: 1,
  //   description: 'Priesthood Power'
  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('zexl').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  updateTodo(id) {
    console.log(`Todo ${id} has been updated.`);
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id) {
    console.log(`Todo ${id} has been deleted.`);
    this.todoService.deleteTodo('zexl', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${id} Successfully Deleted!`;
        this.refreshTodos();
      }
    )
  }

}
