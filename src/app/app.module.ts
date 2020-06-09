import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertModule } from 'ngx-alerts';
import { AlertsModule } from 'angular-alert-module';
import { TokenInterceptor } from './interceptor.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AlertsModule.forRoot(), AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}), BrowserModule, BrowserAnimationsModule, ToastrModule.forRoot(), AppRoutingModule, IonicModule.forRoot(),  CommonModule,   HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
