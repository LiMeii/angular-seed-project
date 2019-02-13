import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
    selector: 'app-sibling-two',
    template: `
    <div style="margin-top:20px;margin-bottom: 15px;"> <strong>here is the message: </strong><span>{{msgContet}}</span> </div>
    `
})

export class SiblingTwoComponent implements OnDestroy {
    private subscription: Subscription;
    private msgContet: string;
    constructor(private dataService: DataService) {
        this.subscription = this.dataService.getMessage().subscribe((data) => {
            this.msgContet = data;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}