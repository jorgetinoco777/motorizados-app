import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { app } from 'src/environments/environment.prod';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

    //  info app 
    nombre:string = app.nombre;
    logo:string   = app.icono.nivel_2;
    autor:string  = app.autor;


    // `[(gnModal)]`
    email:string = "";
    
    
  constructor( private router:Router,  private _toast:ToastController) { }

  ngOnInit() {
  }

  
  async message( message:string, color:string="success", icon:string="checkmark-sharp" ) {
    const iconDOM =`<ion-icon name="${icon}"></ion-icon>`;
    const toast = await this._toast.create({
      message: `${iconDOM} ${message} `,
      color,
      duration: 1500,
      position: 'top', 
    });
    toast.present();
  }

  onForgotPassword(f:NgForm){
    if (f.invalid) return;

    this.message(`Revisa tu email ${this.email} para restablecer tu contraseña`)

  }

  goToLogin() {
  
    this.router.navigate(['/login'])
  }


}
