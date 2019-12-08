import { Month } from "../model/month";
import { Injectable } from "@angular/core";
import { Week } from "../model/week";
import { Day } from "../model/day";

@Injectable()
export class CalendarCreator {
  public currentMonth = new Month();

  private months = [];
  private weekday =[];

  constructor() {
    let date = new Date();
    let currentYear = date.getFullYear();
    let monthIndex = date.getMonth();

    this.months[0] = "January";
    this.months[1] = "February";
    this.months[2] = "March";
    this.months[3] = "April";
    this.months[4] = "May";
    this.months[5] = "June";
    this.months[6] = "July";
    this.months[7] = "August";
    this.months[8] = "September";
    this.months[9] = "October";
    this.months[10] = "November";
    this.months[11] = "December";

    this.weekday[0] = "Sunday";
    this.weekday[1] = "Monday";
    this.weekday[2] = "Tuesday";
    this.weekday[3] = "Wednesday";
    this.weekday[4] = "Thursday";
    this.weekday[5] = "Friday";
    this.weekday[6] = "Saturday";

    this.currentMonth = this.getMonth(monthIndex +1, currentYear);
  }

  public getCurrentMonth(): Month {
    return this.currentMonth;
  }

  public getMonth(monthNumber: number, year: number): Month {

    let month = new Month();
    month.title = this.months[monthNumber -1];
    month.monthNumber = monthNumber;
    month.year = year;
    month.days = new Date(year, monthNumber, 0).getDate();

    let daysInWeek = 7;

    let day = 0;
    let maxDay = month.days;

    let weeks = [];

    for (let weekIndex = 0; ; weekIndex++) {
      weeks.push(new Week());

      let weekDayIndex = 0;

      // add days of prev month if they are in first week of next month
      if (weekIndex == 0) {
        weekDayIndex = new Date(`${year}-${monthNumber}-01`).getDay();
        let weekDayName = this.weekday[weekDayIndex];

        for (let i = 0; i < weekDayIndex; i++) {
          weeks[0].days.push(new Day());
        }
      }

      for (; weekDayIndex < daysInWeek; weekDayIndex++) {
        ++day;

        if (day > maxDay) {
          break;
        }

        var date = new Day();
        date.title = day.toString();

        weeks[weekIndex].days.push(date);
      }

      if (day > maxDay) {
        break;
      }
    }

    month.weeks = weeks;
   
    return month;
  }
}
