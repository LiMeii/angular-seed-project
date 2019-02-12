import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ParentComponent } from './parent-to-child/parent.component';

const dataSharingRoute: Routes = [
    { path: '', component: ParentComponent },
    { path: 'parentToChild', component: ParentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(dataSharingRoute)]

})

export class DataSharingRoutingModule {

}