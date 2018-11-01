import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, CanLoad } from '@angular/router';
import { LocalStorageService } from "angular-2-local-storage/dist";

import { userPermission, role, appStorage } from '../app-constants';

@Injectable()

export class UserGuard implements CanActivate, CanLoad {

    constructor(private router: Router, private localStorageService: LocalStorageService) { }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
        let canRoute = false;
        let isLogin = this.localStorageService.get(appStorage.isLogin);
        let roleType = this.localStorageService.get(appStorage.loginType);

        if (isLogin && roleType === role.user) {
            let privilegeToRoute = activatedRouteSnapshot.data.privileges;
            let privileges = userPermission.userFeatures.privilege;
            if (privilegeToRoute) {
                privilegeToRoute.forEach(element => {
                    if (privileges.indexOf(element) !== -1) {
                        canRoute = true;
                    }
                });
            }
        } else {
            canRoute = false;
            this.router.navigate(['login']);
        }
        return canRoute;
    }

    canLoad(): boolean {
        let isLogin = this.localStorageService.get(appStorage.isLogin);
        let roleType = this.localStorageService.get(appStorage.loginType);
        let canRoute = false;
        if (isLogin && roleType === role.user) {
            canRoute = true;
        }
        return canRoute;
    }
}