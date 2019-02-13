import { Component } from "@angular/core";
import { DataService } from './data.service';

@Component({
    selector: 'app-sibling-one',
    template: `
    <div style="margin-top:20px;margin-bottom: 15px;"> <strong>please input message: </strong> 
    <input style="width:300px;height:30px" [(ngModel)]="message" (keyup)="onMsgChange()"/>
    </div>
    `
})

export class SiblingOneComponent {
    private message: string;
    constructor(private dataService: DataService) {
    }
    onMsgChange() {
        this.dataService.setMessage(this.message);
    }
}