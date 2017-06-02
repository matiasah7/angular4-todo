import { Component } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class TodoInputComponent {

  test = ["as", "db"];

  tasks = [];

  add(task, myInput: HTMLInputElement){
    this.tasks.push(task);
    myInput.value = null;
  }

}
