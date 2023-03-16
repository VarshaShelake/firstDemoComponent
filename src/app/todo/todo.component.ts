import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService : TodoService) { 

  }
  createTodo(){
    let todo ={
      id : new Date().getTime(),
      title : 'Format the data of firebase'
    }
    this.todoService.create(todo).subscribe((responce) =>{
      console.log('todo create',responce);
      }, (error =>{
      console.log(error);
      }))
  }
  

  ngOnInit() {
  }

}
