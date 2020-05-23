import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FireBase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

//Environment
import { environment } from "./../environments/environment";

//Http
import { HttpClientModule } from '@angular/common/http';


//LocalStorage
import { IonicStorageModule } from '@ionic/storage';

// redux
import { StoreModule } from '@ngrx/store';
import { authReducer } from './redux/auth/auth.reducer';
import { enterpriseReducer } from './redux/main/main.reducer';



//Geolocalizacion
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [ AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,

    //FireBase
    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireAuthModule,


    //Redux
    StoreModule.forRoot( {authReducer,enterpriseReducer}),
 

    //Stora
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })

  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
