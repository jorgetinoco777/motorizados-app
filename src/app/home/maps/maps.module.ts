import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { MapsPage } from './maps.page';
import { ProfilePage } from '../profile/profile.page';
import { ProfileModule } from '../profile/profile.module';
import { MapsPageRoutingModule } from './maps-routing.module';
import { PreferencesPageModule } from '../preferences/preferences.module';
import { PersonalInformationPageModule } from '../personal-information/personal-information.module';
import { MyDeliverysPageModule } from '../my-deliverys/my-deliverys.module';
import { TermsAndConditionPageModule } from '../terms-and-condition/terms-and-condition.module';
import { TermsAndConditionPage } from '../terms-and-condition/terms-and-condition.page';
import { PreferencesPage } from '../preferences/preferences.page';
import { PersonalInformationPage } from '../personal-information/personal-information.page';
import { MyDeliverysPage } from '../my-deliverys/my-deliverys.page';
import { DetailDelirevyPage } from '../detail-delirevy/detail-delirevy.page';
import { DetailDelirevyPageModule } from '../detail-delirevy/detail-delirevy.module';

@NgModule({
  entryComponents: [
    DetailDelirevyPage,
    ProfilePage,
    MyDeliverysPage,
    PersonalInformationPage,
    PreferencesPage,
    TermsAndConditionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDelirevyPageModule,
    ProfileModule,
    MyDeliverysPageModule,
    PersonalInformationPageModule,
    PreferencesPageModule,
    TermsAndConditionPageModule,
    MapsPageRoutingModule
  ],
  declarations: [MapsPage]
})
export class MapsPageModule {}
