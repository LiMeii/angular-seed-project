import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsRoutingModule } from './setting-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        RouterModule,
        SettingsRoutingModule

    ],
    declarations: [SettingsComponent]
})

export class SettingsModule { }