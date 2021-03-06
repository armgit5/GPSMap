import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapComponent } from '../components/map/map';
import { AgmCoreModule } from '@agm/core';
import { LocationsService } from '../services/locations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6AZjFBw3tWkMG5kyupbdOa5UNX3cAt7Q'
    }),
    AngularFireModule.initializeApp(environment.firebase, 'gps-map-af92f'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationsService
  ]
})
export class AppModule {}
