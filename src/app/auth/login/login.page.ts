import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

//Service
import { AuthService } from 'src/app/service/auth.service';

//Models
import { User } from 'src/app/models/user.class';
import { app } from 'src/environments/environment';
import { ToastController, LoadingController, ModalController, IonContent, NavController } from '@ionic/angular';

import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/redux/auth/auth.reducer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

 @Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static:false}) slides: IonContent;

  nombre:string = app.nombre;
  autor:string  = app.autor;
  information:boolean;
  loading:any;

  user: User;
  state:User;
  constructor( private _authService: AuthService,
               private router: Router,
               public navCtrl: NavController,
               private toastCtrl: ToastController,
               private modalCtrl: ModalController,
               private loadingCtrl: LoadingController ) {
               
              }

  ngOnInit() { 

     this.user = {
      email: "",
      password: "",
      type: "CLIENT"
    }
  }

  async onLogin( form : NgForm) {
    if (form.invalid) return;

    
   
  }
 
  
  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToForgotPassword(){
    this.router.navigate(['/forgot-password']);
  }

  goToHome(){
    this.router.navigate(['/maps']);

  }

  async presentLoading( message: string ='Cargando' ) {
    this.loading = await this.loadingCtrl.create({
      spinner:"dots",
      message,
     });
    this.loading.present();
  }

  async message( message:string, color:string="success" , icon:string="checkmark-sharp" ) {
    const iconDOM =`<ion-icon name="${icon}"></ion-icon>`;
    const toast = await this.toastCtrl.create({
      message: `${iconDOM} ${message} `,
      color,
      duration: 1500,
      position: 'top', 
    });
    toast.present();
  }


}
