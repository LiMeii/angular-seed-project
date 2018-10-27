import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    declarations: [LoginComponent],
    exports: [RouterModule]
})


export class AuthenticationRoutingModule {

}