import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "angular-2-local-storage/dist";
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Rx";

import { MessageService } from './core/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls:['./app.component.css']
  styles: [require('./app.component.css').toString()]
})
export class AppComponent implements OnInit {
  title = 'angular-seed-project';
  subscription: Subscription;
  isLogin: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.getLoginStatus().subscribe((data) => {
      if (data) {
        this.isLogin = data.isLogin;
      }
    })
  }

  logOut() {
    const strKeys = this.localStorageService.keys();
    if (strKeys) {
      strKeys.forEach((item) => {
        this.localStorageService.remove(item);
      });
    }
    this.isLogin = false;
    this.router.navigate(['login']);
  }
}
