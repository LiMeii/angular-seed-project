import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { ParentComponent } from './parent-to-child/parent.component';
import { ChildComponent } from './parent-to-child/child.component';

@NgModule({
    imports: [
        DataSharingRoutingModule,
        CommonModule],
    declarations: [
        ParentComponent,
        ChildComponent
    ]

})

export class DataSharingModule {

}