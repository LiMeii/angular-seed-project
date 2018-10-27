import { NgModule } from "@angular/core";

import { LoginGuard } from './login-guard';

@NgModule({
    providers: [LoginGuard]
})

export class AuthGuardModule {

}