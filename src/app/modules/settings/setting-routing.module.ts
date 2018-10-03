import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const settingsRoutes: Routes = [
    { path: '', component: SettingsComponent }
];


@NgModule({
    imports: [RouterModule.forChild(settingsRoutes)],
    exports: [RouterModule]
})

export class SettingsRoutingModule { }