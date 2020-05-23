import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Enterprise } from 'src/app/redux/main/main.reducer';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';
import { DetailDelirevyPage } from '../detail-delirevy/detail-delirevy.page';

import { styles_google } from 'src/environments/environment.prod';
 

declare var google;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})


export class MapsPage implements OnInit {

  loading:any;

  // redux
  enterprise:Enterprise;
  cordenadas:any;

  constructor(  private _geolocalizacion: Geolocation, 
                private toastCtrl:  ToastController, 
                private _modal:ModalController,
                private loadingCtrl: LoadingController ) {
  }

  
  ngOnInit() {
    this.cargarMapa();  
  }

  
 async modalProfile(){
    const modal = await this._modal.create({
      component: ProfilePage,
      componentProps:{
        nombre:"Jeison Caguana",
        pais:"Ecuador"
      }
    });

    await modal.present();
  }






  // google maps 
  async cargarMapa(  ){
    //set de cordenadas
    
    await this._geolocalizacion.getCurrentPosition().then( ( my ) => {
      // yo
      // this.cordenadas = { lat: my.coords.latitude, lng: my.coords.longitude, }; 
      this.cordenadas = { lat: 0.969178, lng: -79.652708 }; 
      this.cargarMarcador( this.cordenadas )
    })     
   }

   async cargarMarcador(cordenadas:any) {  
  

 
     let mapEle: HTMLElement = document.getElementById('mapa');
 
     const mapaDOM = new google.maps.Map(mapEle, {
         center: { lat: cordenadas.lat, lng:cordenadas.lng },
         zoom: 15,
         disableDefaultUI: true, 
         scrollWheel:false,
         draggable:true,   
          styles : [
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#4c5966"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#e4e7e7"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ]
     });
 

   
     const marker:any[] = [];
 

     google.maps.event.addListenerOnce(mapaDOM , 'idle', () => {
        marker[0] =  new google.maps.Marker({ 
          position: { lat: 0.969178, lng: -79.652708  }, 
          map: mapaDOM,  
          draggable: true,          
          icon :"./assets/Logos/delivery.png",  
      });
 
        marker[0].addListener('click', async () => {
         
          const modal = await this._modal.create({
            component: DetailDelirevyPage,
            componentProps:{
              nombre:"Jeison Caguana",
              pais:"Ecuador"
            }
          });
      
          await modal.present();

          
        } );
 
       }); 
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
