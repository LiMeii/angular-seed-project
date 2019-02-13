import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardModule } from './core/guards/auth-guard.module';
import { MessageService } from './core/message.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalStorageModule,
    AuthGuardModule,
    CommonModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: '',
      storageType: 'localStorage'
    })
  ],
  providers: [LocalStorageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
