import { Component } from "@angular/core";
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

import { appStorage, role } from '../../../core/app-constants';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(private localStorageService: LocalStorageService, private router: Router) {

    }

    onAdminLogin() {
        this.localStorageService.set(appStorage.isLogin, true);
        this.localStorageService.set(appStorage.loginType, role.admin);
        this.router.navigate(['settings'])
    }

    onUserLogin() {
        this.localStorageService.set(appStorage.isLogin, true);
        this.localStorageService.set(appStorage.loginType, role.user);
        this.router.navigate(['dashboard'])
    }
}