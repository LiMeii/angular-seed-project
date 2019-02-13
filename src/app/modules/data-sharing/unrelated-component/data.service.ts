import { Injectable } from "@angular/core";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
    private msgContent: Subject<string> = new Subject<string>();

    setMessage(value:string){
        this.msgContent.next(value);
    }
    getMessage(){
        return this.msgContent.asObservable();
    }
}