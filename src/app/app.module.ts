import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { UserService } from './core/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule,} from '@angular/forms';

import { ScheduleComponent } from './schedule/schedule.component';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
 
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ScheduleComponent

   	

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    FullCalendarModule ,
    ScheduleModule,
    UsersModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,  DayService, WeekService, WorkWeekService, MonthService, AgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
