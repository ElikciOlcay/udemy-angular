import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targeted: Date
  ) {}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
    new Todo(1, 'learn to dance', false, new Date()),
    new Todo(1, 'learn to code', false, new Date()),
    new Todo(1, 'visit new york', false, new Date())
  ];


  constructor() { }

  ngOnInit() {
  }

}
