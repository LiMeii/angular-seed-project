import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        RouterModule,
        DashboardRoutingModule

    ],
    declarations: [DashboardComponent]
})

export class DashboardModule { }