import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './parent-to-child/parent.component';
import { VoteParentComponent } from './child-to-parent/output/vote-parent.component';
import { TimerParentComponent } from './child-to-parent/viewchild/timer-parent.component';

const dataSharingRoute: Routes = [
    { path: '', component: ParentComponent },
    { path: 'parentToChild', component: ParentComponent },
    { path: 'vote', component: VoteParentComponent },
    { path: 'timer', component: TimerParentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(dataSharingRoute)]

})

export class DataSharingRoutingModule {

}