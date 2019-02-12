import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { ParentComponent } from './parent-to-child/parent.component';
import { ChildComponent } from './parent-to-child/child.component';
import { VoteParentComponent } from './child-to-parent/output/vote-parent.component';
import { voteChildComponent } from './child-to-parent/output/vote-child.component';
import { TimerParentComponent } from './child-to-parent/viewchild/timer-parent.component';
import { TimerChildComponent } from './child-to-parent/viewchild/timer-child.component';

@NgModule({
    imports: [
        DataSharingRoutingModule,
        CommonModule],
    declarations: [
        ParentComponent,
        ChildComponent,
        VoteParentComponent,
        voteChildComponent,
        TimerParentComponent,
        TimerChildComponent
    ]

})

export class DataSharingModule {

}