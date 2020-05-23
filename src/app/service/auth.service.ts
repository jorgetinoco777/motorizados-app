import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// redux
import { AuthState } from '../redux/auth/auth.reducer';
import { SetUserAction } from '../redux/auth/auth.actions';

//Roter
import { Router } from "@angular/router";

//Firebase
import { AngularFireAuth } from "@angular/fire/auth";

//Models
import { User } from "../models/user.class";
import { UserService } from './user.service';

//Storage
import { Storage } from '@ionic/storage';

//RXJS
import { map } from "rxjs/operators";

//JWT Decode
import * as jwt_decode from 'jwt-decode';
import { Utils } from '../utils';
import { Enterprise } from '../redux/main/main.reducer';
import { ResetEnterpriseAction } from '../redux/main/main.actions';
import { EnterpriseService } from './enterprise.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor ( private _auth: AngularFireAuth,
                private _userService: UserService,
                private store: Store<AuthState>,
                private storage: Storage,
                private router: Router,
                private _enterprise: EnterpriseService,
                 ) {

 
  }

  //Login
  async signIn( user: User ) {
    
    let response: any = await this._auth.signInWithEmailAndPassword( user.email, user.password );
    
    if ( !response ) return;

    user.uid = response.user.uid;
    user.token = response.xa;
    await this.enterprise();


    await this._userService.findUserByUID( user.uid ).subscribe( async (userLogin: any) => {

           let adress:any[]=[];
          if(!userLogin.adress) 
              adress = null;
          else
              Utils.convert_to_array( userLogin.adress ).forEach( item => adress.push(item) );
          

          this.store.dispatch( new SetUserAction({
            uid: user.uid,
            email: userLogin.email,
            name: userLogin.name,
            image: userLogin.image,
            adress:adress,
            mailing:userLogin.mailing,
            information:userLogin.information,
            push_notifications: userLogin.push_notifications
          })); 

   
    });

      //SaveToken
    await this.storage.set('token', response.user.xa);
    return user;
    
    
  }

  //Register
  async signUp( user: User ) {
    //Crear usuario en firebase
    let response: any = await this._auth.createUserWithEmailAndPassword( user.email, user.password );
    if( !response ) return;
      let uid = response.user.uid;
      user.token = response.xa;
      user.password = "";

      //Registrar datos usuario
      await this._userService.register( uid, user ).subscribe( async (confirm) => {
        //Init Redux AuthState 
        let adress:any[]=[];
        if(!user.adress) 
          adress = null;
        else            
          Utils.convert_to_array( user.adress ).forEach( item =>  adress.push(item) );
        
      
        await this.store.dispatch( 
          new SetUserAction(
            {
              uid: uid,
              email: user.email,
              name: user.name,
              image: user.image,
              adress:user.adress,
              mailing:user.mailing,
              information:user.information,
              push_notifications: user.push_notifications
            }));
      });
      
      // Save user token
      await this.storage.set('token', response.user.xa);
      return user;
  }

  async onForgotPassword ( email:string) {
    return this._auth.sendPasswordResetEmail(email);
  }
  // salir
  async onLogout() {
    await this.storage.set('token', null);
    return this._auth.signOut();
  }

  async isAuthenticated() {
      return this._auth.authState.pipe( map( fbUser => fbUser != null ) );
  }
  async enterprise(){
    await this._enterprise.getInfoEnterprise().subscribe( (enterprise:Enterprise) => this.store.dispatch( new ResetEnterpriseAction(enterprise)) );
  }

}
