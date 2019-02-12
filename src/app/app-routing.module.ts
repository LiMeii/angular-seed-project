import { NgModule } from '@angular/core';
//import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './app.custom.preloader';
import { UserGuard } from './core/guards/user-guards';
import { AdminGuard } from './core/guards/admin-guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/authentication/authentication.module#AuthenticationModule',
        data: { preload: true }
    },
    {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canLoad: [UserGuard]
    },
    {
        path: 'settings',
        loadChildren: './modules/settings/settings.module#SettingsModule',
        canLoad: [AdminGuard]
    },
    {
        path: 'reports',
        loadChildren: './modules/reports/reports.module#ReportsModule',
        canLoad: [AdminGuard]
    },
    {
        path: 'profile',
        loadChildren: './modules/profile/profile.Module#ProfileModule',
        canLoad: [UserGuard]
    },
    {
        path: 'dataSharing',
        loadChildren: './modules/data-sharing/data-sharing.module#DataSharingModule'

    }

];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader, useHash: true })],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }