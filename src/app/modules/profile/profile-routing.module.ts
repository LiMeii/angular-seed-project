import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

const profileRoutes: Routes = [{ path: '', component: ProfileComponent }]

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    declarations:[ProfileComponent],
    exports: [RouterModule]
})

export class ProfileRoutingModule {

}