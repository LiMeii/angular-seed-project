import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { AdminGuard } from '../../core/guards/admin-guard';
import { permissionSets } from '../../core/app-constants';

const ReportsRoutes: Routes = [
    {
        path: '',
        component: ReportsComponent,
        data: { privileges: [permissionSets.APP_ManageReports] },
        canActivate: [AdminGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(ReportsRoutes)],
    declarations: [ReportsComponent],
    exports: [RouterModule]
})

export class ReportsRoutingModule { }