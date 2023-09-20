import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})

export class TodosComponent implements OnInit{

deleteTodo(todo:Todo) {
   console.log(todo);
   this.todos.splice(this.todos.indexOf(todo),1);
   console.log(this.todos);
   localStorage.setItem("todos",JSON.stringify(this.todos));
}
  
  todos : Todo[] ;

  constructor(){   
    const localItem = localStorage.getItem("todos");
    if(localItem != null){
       this.todos = JSON.parse(localItem);
    }else{
      this.todos = [];
    }

  }
  ngOnInit(): void {

  }
  addTodo(todo:Todo){
    console.log("Adding a todo",todo)
    todo.sno = this.todos.length +1;
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].isActive= !this.todos[index].isActive;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
