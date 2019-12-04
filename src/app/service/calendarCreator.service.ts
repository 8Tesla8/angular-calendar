import { Month } from "../model/month";
import { Injectable } from "@angular/core";
import { Week } from "../model/week";
import { Day } from "../model/day";

@Injectable()
export class CalendarCreator {
  public currentMonth = new Month();

  private months = [];

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

    this.currentMonth = this.getMonth(monthIndex, currentYear);
  }

  public getCurrentMonth(): Month {
    return this.currentMonth;
  }

  public getMonth(monthIndex: number, year: number): Month {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    var d2 = new Date(`${year}-${monthIndex + 1}-01`);
    var n2 = weekday[d2.getDay()];
    //


    let month = new Month();
    month.title = this.months[monthIndex];
    month.monthIndex = monthIndex;
    month.year = year;
    month.days = new Date(year, monthIndex + 1, 0).getDate();

    let daysInWeek = 7;

    let day = 0;
    let maxDay = month.days;

    let weeks = [];

    for (let weekIndex = 0; ; weekIndex++) {
      weeks.push(new Week());

      let weekDay = 0;

      // add days in prev month but in first week
      if (weekIndex == 0) {
        weekDay = new Date(`${year}-${monthIndex + 1}-01`).getDay();
        for (let i = 0; i < weekDay; i++) {
          weeks[0].days.push(new Day());
        }
      }

      for (; weekDay < daysInWeek; weekDay++) {
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
