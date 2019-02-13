import { Component } from "@angular/core";

@Component({
    selector: 'app-timer-child',
    template: `
            <div style="margin-top:15px">reset count: {{resetCount}}</div>
    `
})

export class TimerChildComponent {

    public seconds: number = 10;
    private resetCount: number = 0;

    onStart() {
        window.setInterval(() => {
            if (this.seconds) {
                this.seconds = this.seconds - 1;
            }
        }, 1000)
    }
    onReset() {
        this.seconds = 10;
        this.resetCount++
    }
}