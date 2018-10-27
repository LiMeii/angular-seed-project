import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        RouterModule,
        DashboardRoutingModule

    ]    
})

export class DashboardModule { }