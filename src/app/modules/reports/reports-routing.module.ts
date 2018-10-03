import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';

const ReportsRoutes: Routes = [
    { path: '', component: ReportsComponent }
];


@NgModule({
    imports: [RouterModule.forChild(ReportsRoutes)],
    exports: [RouterModule]
})

export class ReportsRoutingModule { }