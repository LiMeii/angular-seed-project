import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-vote-child',
    template: `
                <div style="margin-top:30px;margin-bottom: 15px;"><strong>please take your vote:</strong> </div>
                <button (click)="takeVote(true)">Agree</button> <button (click)="takeVote(false)">Disagree</button>
                `
})

export class VoteChildComponent {
    @Output() vote = new EventEmitter<Boolean>();

    takeVote(agree: Boolean) {
        this.vote.emit(agree);
    }

}