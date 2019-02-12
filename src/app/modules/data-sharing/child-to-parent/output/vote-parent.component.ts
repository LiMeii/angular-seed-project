import { Component } from "@angular/core";

@Component({
    template: `<div style="margin-left:100px;font-size:1.28em;">
               <div> <strong>Here is the vote results:</strong></div>
               <div style="margin-top:20px;"> agreed:{{agreed}}   disagreed: {{disAgreed}}<div> 
               </div>   
               <app-vote-child (vote)="onVote($event)"></app-vote-child>
    `
})

export class VoteParentComponent {
    private agreed: number = 0;
    private disAgreed: number = 0;

    onVote(agree: boolean) {
        agree ? this.agreed++ : this.disAgreed++;
    }

}