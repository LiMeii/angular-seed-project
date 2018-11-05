import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, CanLoad, CanActivateChild } from '@angular/router';
import { LocalStorageService } from "angular-2-local-storage/dist";

import { role, userPermission, appStorage } from '../app-constants';


@Injectable()

export class AdminGuard implements CanActivate, CanLoad, CanActivateChild {

    constructor(
        private router: Router,
        private localStorageService: LocalStorageService
    ) { }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
        let isLogin = this.localStorageService.get(appStorage.isLogin);
        let roleType = this.localStorageService.get(appStorage.loginType);
        let canRoute = false;
        if (isLogin && roleType === role.admin) {
            let privilegesToRoute = activatedRouteSnapshot.data.privileges;
            if (privilegesToRoute) {
                privilegesToRoute.forEach(element => {
                    if (userPermission.adminFeatures.privilege.indexOf(element) !== -1) {
                        canRoute = true;
                    }
                });
            }
        } else {
            this.router.navigate(['login']);
            canRoute = false;
        }
        return canRoute;
    }

    canLoad(): boolean {
        let isLogin = this.localStorageService.get(appStorage.isLogin);
        let roleType = this.localStorageService.get(appStorage.loginType);
        let canRoute = false;
        if (isLogin && roleType === role.admin) {
            canRoute = true;
        }
        return canRoute;
    }

    canActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
        let isLogin = this.localStorageService.get(appStorage.isLogin);
        let roleType = this.localStorageService.get(appStorage.loginType);
        let canRoute = false;
        if (isLogin && roleType === role.admin) {
            let privilegesToRoute = activatedRouteSnapshot.data.privileges;
            if (privilegesToRoute) {
                privilegesToRoute.forEach(element => {
                    if (userPermission.adminFeatures.privilege.indexOf(element) !== -1) {
                        canRoute = true;
                    }
                });
            }
        } else {
            this.router.navigate(['login']);
            canRoute = false;
        }
        return canRoute;
    }
}