import { NgModule } from '@angular/core';
//import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './app.custom.preloader';
import { LoginGuard } from './core/guards/login-guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/authentication/authentication.module#AuthenticationModule',
        data: { preload: true }
    },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        data: { preload: true },
        canActivate: [LoginGuard]
    },
    {
        path: 'settings',
        loadChildren: './modules/settings/settings.module#SettingsModule',
        canActivate: [LoginGuard]
    },
    {
        path: 'reports',
        loadChildren: './modules/reports/reports.module#ReportsModule',
        canActivate: [LoginGuard]
    },
    {
        path: 'profile',
        loadChildren: './modules/profile/profile.Module#ProfileModule',
        canActivate: [LoginGuard]
    }

];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader, useHash: true })],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }