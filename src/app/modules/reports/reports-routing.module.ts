import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { DailyReportCompoent } from './daily-reports/daily-reports-component';
import { WeeklyReportsComponent } from './weekly-reports/weekly-reports-component';
import { AdminGuard } from '../../core/guards/admin-guard';
import { permissionSets } from '../../core/app-constants';

const ReportsRoutes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        data: { privileges: [permissionSets.APP_ManageReports] },
        canActivate: [AdminGuard],
        children: [{
            path: '',
            canActivateChild: [AdminGuard],
            children: [
                { path: 'dailyreports', component: DailyReportCompoent },
                { path: 'weeklyreports', component: WeeklyReportsComponent }
            ]
        }]
    }
];


@NgModule({
    imports: [RouterModule.forChild(ReportsRoutes)],
    exports: [RouterModule]
})

export class ReportsRoutingModule { }