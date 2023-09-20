import { Component, EventEmitter, Output} from '@angular/core';
import { Todo  } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
 title:string;
 desc: string;
 
 @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
 @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
 onSubmit(){
  const todo ={
    sno:0,
    title:this.title,
    desc:this.desc,
    isActive:true
  }
  this.todoAdd.emit(todo);
 }
 onClickCheckBox(todo:Todo){

  this.todoCheckBox.emit(todo);
}
}


