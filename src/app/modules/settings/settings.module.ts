import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsRoutingModule } from './setting-routing.module';

@NgModule({
    imports: [
        RouterModule,
        SettingsRoutingModule

    ]
})

export class SettingsModule { }