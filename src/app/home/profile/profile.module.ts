import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

//Component
import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    
  ],
  declarations: [
    ProfilePage
  ],
})
export class ProfileModule { }
