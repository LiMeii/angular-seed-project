import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './settings.component.html'
})
export class SettingsComponent {

    canDeactivate(): Observable<boolean> | boolean {
        return window.confirm('Do you want leave?')
    }

}
