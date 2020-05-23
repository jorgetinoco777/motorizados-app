import { Component, OnInit } from '@angular/core';

//Router
import { Router } from "@angular/router";

//Services
import { AuthService } from '../../service/auth.service';
import { ModalController } from '@ionic/angular';
import { PersonalInformationPage } from '../personal-information/personal-information.page';
import { MyDeliverysPage } from '../my-deliverys/my-deliverys.page';
import { PreferencesPage } from '../preferences/preferences.page';
import { TermsAndConditionPage } from '../terms-and-condition/terms-and-condition.page';
import { DetailDelirevyPage } from '../detail-delirevy/detail-delirevy.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name = 'Nombre Apellido';

  constructor( private _auth: AuthService,
               private router: Router,
               private _modal:ModalController ) { }

  ngOnInit() {}
  
  onLogout() {
    this._modal.dismiss();
    this.router.navigate(['/login']);
  }

  dismiss(){
    this._modal.dismiss(null, null);
  }

    
 async modalPage( page:string){ 

  let irComponent:any;
  switch( page ){
    case 'personal-information':    irComponent = PersonalInformationPage;    break;
    case 'my-deliverys':            irComponent = MyDeliverysPage;            break;
    case 'preferences':             irComponent = PreferencesPage;            break;
    case 'terms-and-conditions':    irComponent = TermsAndConditionPage;      break;
    default: return;

  }

  const modal = await this._modal.create({
    component: irComponent,
  });

  await modal.present();
}




async detailDelirevyPage() {
  const modal_ = await this._modal.create({
    component: DetailDelirevyPage,
  });

  await modal_.present();
}

}
