export const appStorage = {
    isLogin: 'isLogin',
    loginType: 'loginType'
}

export const role = {
    admin: 'admin',
    user: 'user'
}

export const permissionSets = {
    APP_ManageSettings: ' APP_ManageSettings',
    APP_ManageReports: 'APP_ManageReports',
    APP_ManageDashboard: 'APP_ManageDashboard',
    APP_ManageProfile: 'APP_ManageProfile'
}

export const userPermission = {
    adminFeatures: {
        privilege: [permissionSets.APP_ManageSettings, permissionSets.APP_ManageReports],
        menus: [
            {
                title: 'settings',
                routerLink: 'settings',
                privilege: [permissionSets.APP_ManageSettings]
            },
            {
                title: 'reports',
                routerLink: 'reports',
                privilege: [permissionSets.APP_ManageReports]
            }
        ]
    },
    userFeatures: {
        privilege: [permissionSets.APP_ManageDashboard, permissionSets.APP_ManageProfile],
        menus: [
            {
                title: 'dashboard',
                routerLink: 'dashboard',
                privilege: [permissionSets.APP_ManageDashboard]
            },
            {
                title: 'profile',
                routerLink: 'profile',
                privilege: [permissionSets.APP_ManageProfile]
            }
        ]
    }
}