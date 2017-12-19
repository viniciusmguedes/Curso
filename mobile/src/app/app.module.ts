import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AppHttpService } from './app-http.service';
import { HttpModule } from '@angular/http';

import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import { SplashPage } from '../pages/splash/splash';
import { HomePage } from '../pages/home/home';
import { RestaurantPage } from '../pages/restaurant/restaurant';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SplashPage,
    HomePage,
    RestaurantPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    HomePage,
    RestaurantPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppHttpService,
    Geolocation,
  ]
})
export class AppModule {}
