import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { permissionSets } from '../../core/app-constants';
import { AdminGuard } from '../../core/guards/admin-guard';

const settingsRoutes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        data: { privileges: [permissionSets.APP_ManageSettings] },
        canActivate: [AdminGuard]
    }
];


@NgModule({
    imports: [RouterModule.forChild(settingsRoutes)],
    declarations: [SettingsComponent],
    exports: [RouterModule]
})

export class SettingsRoutingModule { }