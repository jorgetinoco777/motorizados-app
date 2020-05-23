import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

 
import { MyDeliverysPage } from './my-deliverys.page';
import { DetailDelirevyPage } from '../detail-delirevy/detail-delirevy.page';
import { DetailDelirevyPageModule } from '../detail-delirevy/detail-delirevy.module';

@NgModule({
  entryComponents:[
    DetailDelirevyPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailDelirevyPageModule
  ],
  declarations: [MyDeliverysPage]
})
export class MyDeliverysPageModule {}
