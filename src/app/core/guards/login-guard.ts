import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from "angular-2-local-storage/dist";

import { appStorage } from '../app-constants';

@Injectable()

export class LoginGuard implements CanActivate {

    constructor(private localStorageService: LocalStorageService, private router: Router) { }
    
    canActivate(): boolean {
        let isLogin = this.localStorageService.get(appStorage.isLogin);
        if (isLogin) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }

    }
}