import { SettingsService } from '../services/settings';
import { QuotesService } from '../services/quotes';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Favorites } from '../pages/favorites/favorites';
import { Library } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { SettingsPage } from '../pages/settings/settings';
import { Quotes } from '../pages/quotes/quotes';
import { Tabs } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    Favorites,
    Library,
    QuotePage,
    SettingsPage,
    Quotes,
    Tabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favorites,
    Library,
    QuotePage,
    SettingsPage,
    Quotes,
    Tabs

  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    SettingsService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
