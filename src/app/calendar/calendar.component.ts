import { Component, OnInit } from '@angular/core';
import { Day } from '../model/day';
import { Task } from '../model/task';
import { CalendarCreator } from '../service/calendarCreator.service';
import { Month } from '../model/month';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private calendarCreator: CalendarCreator) { }

  ngOnInit() {
    this.month = this.calendarCreator.getCurrentMonth();
  }


  public month: Month;
  public selectedDay: Day;
  public newTask: Task;

  public weekDays = [ 
    { title: 'Sunday', style: ''},
    { title: 'Monday', style: ''},
    { title: 'Tuesday', style: ''},
    { title: 'Wednesday', style: ''},
    { title: 'Thursday', style: ''},
    { title: 'Friday', style: ''},
    { title: 'Saturday', style: ''},
  ];


  public onSelectDay(day: Day) {
    this.newTask = new Task();

    this.selectedDay = day;  
  }

  public onEditTask(task: Task) {
    task.mode = 'edit'
  }

  public onSaveEditTask(task: Task) {
    task.mode = 'show'
  }

  public onAddTask(){
    this.selectedDay.tasks.push(this.newTask);

    this.newTask = new Task();
  }
}





