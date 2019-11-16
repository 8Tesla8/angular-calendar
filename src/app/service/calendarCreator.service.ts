import { Month } from "../model/month";
import { Injectable } from "@angular/core";
import { Week } from "../model/week";
import { Day } from "../model/day";

@Injectable()
export class CalendarCreator {
  public currentMonth = new Month();

  private month = [];

  constructor() {
    let d = new Date();
    let currentYear = d.getFullYear();
    let monthIndex = d.getMonth();

    this.month[0] = "January";
    this.month[1] = "February";
    this.month[2] = "March";
    this.month[3] = "April";
    this.month[4] = "May";
    this.month[5] = "June";
    this.month[6] = "July";
    this.month[7] = "August";
    this.month[8] = "September";
    this.month[9] = "October";
    this.month[10] = "November";
    this.month[11] = "December";

    this.currentMonth = this.createMonth(monthIndex, currentYear); 
  }

  public getCurrentMonth(): Month {
    let daysInWeek = 7;

    let day = 0;
    let maxDay = this.currentMonth.days;

    let weeks = [];

    for (let weekIndex = 0; ; weekIndex++) {
      weeks.push(new Week());

      let weekDay = 0;

      // add days in prev month but in first week
      if (weekIndex == 0) {
        weekDay = new Date(this.currentMonth.year, this.currentMonth.monthIndex, 0).getDay();
        for (let i = 0; i < weekDay; i++) {
          weeks[0].days.push(new Day());
        }
      }

      for (; weekDay < daysInWeek; weekDay++) {
        ++day;

        if (maxDay === day) {
          break;
        }

        var d = new Day();
        d.title = day.toString();

        weeks[weekIndex].days.push(d);
      }

      if (maxDay === day) {
        break;
      }
    }

    this.currentMonth.weeks = weeks;
    return this.currentMonth;
  }


  private createMonth(monthIndex: number, year: number): Month {
   
    let d = new Date();

    let month = new Month(); 
    month = new Month();
    month.title = this.month[d.getMonth()];
    month.monthIndex = monthIndex;
    month.year = year;
    month.days = new Date(year, monthIndex, 0).getDate();

    return month;
  }
}
