import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

@NgModule({
    imports: [
        RouterModule,
        ReportsRoutingModule

    ],
    declarations: [ReportsComponent]
})

export class ReportsModule { }