import { Component } from "@angular/core";
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

import { appStorage, role } from '../../../core/app-constants';
import { MessageService } from '../../../core/message.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(
        private localStorageService: LocalStorageService,
        private router: Router,
        private messageService: MessageService) { }

    onAdminLogin() {
        this.localStorageService.set(appStorage.isLogin, true);
        this.localStorageService.set(appStorage.loginType, role.admin);
        this.router.navigate(['settings'])
        let loginStatus = { isLogin: true }
        this.messageService.setLoginStatus(loginStatus);
    }

    onUserLogin() {
        this.localStorageService.set(appStorage.isLogin, true);
        this.localStorageService.set(appStorage.loginType, role.user);
        this.router.navigate(['dashboard']);
        let loginStatus = { isLogin: true }
        this.messageService.setLoginStatus(loginStatus);
    }
}