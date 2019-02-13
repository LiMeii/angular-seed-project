import { Component, OnInit } from '@angular/core';

@Component({
    template:`<h4>Here is the color lists:</h4>
    <app-child [colorLists]="colorLists"></app-child>`
})

export class ParentComponent implements OnInit {

    private colorLists: any;
    ngOnInit() {
        this.colorLists = ['red', 'black', 'green', 'bule', 'yellow'];
    }

}

