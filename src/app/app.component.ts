import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course"),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ]

  toggleDone(event){
    console.log(event);
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].description == event.target.textContent){
        if(this.tasks[i].done == true) {
          this.tasks[i].done = false;
          event.target.classList.remove('isDone');
        } else {
          this.tasks[i].done = true;
          event.target.classList.add('isDone');
        }
      }
    }
    console.log(this.tasks);
  }
}

