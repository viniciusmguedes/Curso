import { Component, ViewChild } from '@angular/core';
import { ModalController ,Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      let splash = this.modalCtrl.create(SplashPage);
      splash.present();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
