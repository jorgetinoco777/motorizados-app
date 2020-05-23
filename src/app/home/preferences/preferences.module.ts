import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

 
import { PreferencesPage } from './preferences.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 
  ],
  declarations: [PreferencesPage]
})
export class PreferencesPageModule {}
