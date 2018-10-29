import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { permissionSets } from '../../core/app-constants';
import { UserGuard } from '../../core/guards/user-guards';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: { privileges: [permissionSets.APP_ManageDashboard] },
        canActivate: [UserGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    declarations: [DashboardComponent],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }