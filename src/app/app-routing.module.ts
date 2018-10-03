import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'settings', loadChildren: './modules/settings/settings.module#SettingsModule' },
    { path: 'reports', loadChildren: './modules/reports/reports.module#ReportsModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }