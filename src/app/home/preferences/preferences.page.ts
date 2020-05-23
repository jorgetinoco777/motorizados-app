import { Component, OnInit } from '@angular/core';
import { app } from 'src/environments/environment.prod';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  logo:string   = app.icono.nivel_2;  

  
  push_notifications:boolean;
  mailing:boolean;
  information:boolean;
  
  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  toggleMenu(){   
    this.modal.dismiss()
  }

  async ionChange( event ){
     
    let row_data:any;
     
    switch( event.detail.value ){
      case 'push_notifications':
        row_data = {
          push_notifications: event.detail.checked
        }
      break;
        
      case 'mailing':
        row_data = {
          mailing: event.detail.checked
        }
      break;

      case 'information':
        row_data = {
          information: event.detail.checked
        }        
      break;
        
      default:
        return;
    }


  }

}
