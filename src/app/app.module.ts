import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardModule } from './core/guards/auth-guard.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalStorageModule,
    AuthGuardModule,
    LocalStorageModule.withConfig({
      prefix: '',
      storageType: 'localStorage'
    })
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
