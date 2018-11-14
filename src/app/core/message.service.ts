import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()

export class MessageService {
    private loginStatus: Subject<any> = new Subject<any>();

    setLoginStatus(value: any) {
        this.loginStatus.next(value);
    }

    getLoginStatus() {
        return this.loginStatus;
    }

}