import { Component, OnInit } from '@angular/core';
import { app } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.page.html',
  styleUrls: ['./terms-and-condition.page.scss'],
})
export class TermsAndConditionPage implements OnInit {

  logo:string     = app.icono.nivel_2;
  titulo:string   = app.nombre;
  autor:string  = app.autor;

  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  toggleMenu(){   
    this.modal.dismiss()
  }


  
  goLink( opcion ){

    let link:string = '';
    switch( opcion ) {
        case 'instagram': link =" https://www.instagram.com/alpaso.app/"; break;

        case 'facebook': link ="https://www.facebook.com/Al-Paso-112253200491898/"; break;
        
        case 'whatsapp': link ="https://www.messenger.com/t/112253200491898"; break;
        
        case 'alpaso': link =" http://alpaso.com.ec/"; break;

        case 'terms-and-cond': link ="http://alpaso.com.ec/terms-and-cond"; break;

        default: link =" http://alpaso.com.ec/";
    }

    window.open(link, '_blank');


  }

}
