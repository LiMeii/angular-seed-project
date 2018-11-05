import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { DailyReportCompoent } from './daily-reports/daily-reports-component';
import { WeeklyReportsComponent } from './weekly-reports/weekly-reports-component';


@NgModule({
    imports: [
        RouterModule,
        ReportsRoutingModule
    ],
    declarations: [
        ReportsComponent,
        DailyReportCompoent,
        WeeklyReportsComponent
    ]
})

export class ReportsModule { }