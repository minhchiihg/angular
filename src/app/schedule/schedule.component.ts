import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { View } from '@syncfusion/ej2-angular-schedule'
@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `
  <div class="abc">
   <ejs-schedule  height="80%" width = "90%" [currentView] = "setView" > </ejs-schedule>
   </div>
  `,
  styles: [`
   .abc{
      margin-top : 50px;
      margin-left: 200px;
    }
    
  `]
})
export class ScheduleComponent implements OnInit {
  public setView: View = "Month";
  constructor() { }

  ngOnInit(): void {
  }

}
