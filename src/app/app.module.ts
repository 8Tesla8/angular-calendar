import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarCreator } from './service/calendarCreator.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalendarCreator],
  bootstrap: [AppComponent]
})
export class AppModule { }
