import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-child',
    template: `<ul>
                 <li *ngFor="let item of colorLists">{{item}}</li>
              </ul>`
})

export class ChildComponent implements OnInit {
    @Input() colorLists: any;
    ngOnInit() {
    }

}