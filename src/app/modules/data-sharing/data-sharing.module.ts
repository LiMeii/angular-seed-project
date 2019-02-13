import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataService } from './unrelated-component/data.service';

import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { ParentComponent } from './parent-to-child/parent.component';
import { ChildComponent } from './parent-to-child/child.component';
import { VoteParentComponent } from './child-to-parent/output/vote-parent.component';
import { VoteChildComponent } from './child-to-parent/output/vote-child.component';
import { TimerParentComponent } from './child-to-parent/viewchild/timer-parent.component';
import { TimerChildComponent } from './child-to-parent/viewchild/timer-child.component';
import { UnrelatedComponent } from './unrelated-component/unrelated-component';
import { SiblingOneComponent } from './unrelated-component/sibling-one-component';
import { SiblingTwoComponent } from './unrelated-component/sibling-two-component';

@NgModule({
    imports: [
        DataSharingRoutingModule,
        CommonModule,
        FormsModule],
    declarations: [
        ParentComponent,
        ChildComponent,
        VoteParentComponent,
        VoteChildComponent,
        TimerParentComponent,
        TimerChildComponent,
        UnrelatedComponent,
        SiblingOneComponent,
        SiblingTwoComponent
    ],
    providers: [DataService]

})

export class DataSharingModule {

}