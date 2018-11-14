import { NgModule } from "@angular/core";

import { LoginGuard } from './login-guard';
import { AdminGuard } from './admin-guard';
import { UserGuard } from './user-guards';
import { CanDeactivateGuard } from './can-deactivate.guard';

@NgModule({
    providers: [
        LoginGuard,
        AdminGuard,
        UserGuard,
        CanDeactivateGuard
    ]
})

export class AuthGuardModule {

}