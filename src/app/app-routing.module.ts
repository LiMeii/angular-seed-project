import { NgModule } from '@angular/core';
//import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './app.custom.preloader';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        data: { preload: true }
    },
    { path: 'settings', loadChildren: './modules/settings/settings.module#SettingsModule' },
    { path: 'reports', loadChildren: './modules/reports/reports.module#SettingsModule' },

];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader, useHash: true })],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }