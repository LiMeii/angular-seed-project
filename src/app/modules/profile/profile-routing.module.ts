import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { UserGuard } from '../../core/guards/user-guards';
import { permissionSets } from '../../core/app-constants';

const profileRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        data: { privileges: [permissionSets.APP_ManageProfile] },
        canActivate: [UserGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    declarations: [ProfileComponent],
    exports: [RouterModule]
})

export class ProfileRoutingModule {

}