import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls:['./app.component.css']
  styles:[require('./app.component.css').toString()]
})
export class AppComponent {
  title = 'angular-seed-project';
}
