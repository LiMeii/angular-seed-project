import { Component, ViewChild, AfterViewInit } from "@angular/core";

import { TimerChildComponent } from './timer-child.component';

@Component({
    template: `
    <div style="margin-left:100px;font-size:1.28em">
    <div style="margin-top:20px;margin-bottom: 15px;"> <strong>This is a timer: </strong></div>
    <button (click)="start()"> start </button> <button (click)="reset()"> reset </button> 
    <div style="background:black;width:80px;height:80px;margin-top:20px;position:relative">
        <div style="font-size:2.5em;color:green;position:absolute;margin-left: 25px;margin-top: 10px;">{{seconds()}}</div>
    </div>
    <app-timer-child></app-timer-child>
    </div>
 `
})

export class TimerParentComponent implements AfterViewInit {

    @ViewChild(TimerChildComponent)
    private timerChildComponent: TimerChildComponent;

    seconds() {
        return 0;
    }
    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timerChildComponent.seconds, 0);
    }
    start() {
        this.timerChildComponent.onStart();
    }
    reset() {
        this.timerChildComponent.onReset();
    }
}