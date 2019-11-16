import { Component, OnInit } from '@angular/core';
import { Week } from '../model/week';
import { Day } from '../model/day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createMonth();
  }

  public month = { title: 'November' };

  public weekDays = [ 
    { title: 'Monday', style: ''},
    { title: 'Tuesday', style: ''},
    { title: 'Wednesday', style: ''},
    { title: 'Thursday', style: ''},
    { title: 'Friday', style: ''},
    { title: 'Saturday', style: ''},
    { title: 'Sunday', style: ''},
  ];

  public weeks: Week[];

  private createMonth(){ 
    
    let daysInWeek = 7;

    let day = 0;
    let maxDay = 32;
    
    this.weeks = [];

    for (let weekIndex = 0; ; weekIndex++) {
  
      this.weeks.push(new Week());
      
      for (let weekDay = 0; weekDay < daysInWeek; weekDay++) {
        ++day;
        
        if(maxDay === day) {
         break;
        }

        this.weeks[weekIndex].days.push( { title: day.toString(), style: '' } as Day );
      }

      if(maxDay === day) {
        break;
       }
    }
  }
}





