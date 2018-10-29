import { NgModule } from "@angular/core";

import { LoginGuard } from './login-guard';
import { AdminGuard } from './admin-guard';
import { UserGuard } from './user-guards';

@NgModule({
    providers: [
        LoginGuard,
        AdminGuard,
        UserGuard]
})

export class AuthGuardModule {

}