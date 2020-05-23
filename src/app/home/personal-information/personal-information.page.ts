import { Component, OnInit, ViewChild } from '@angular/core';
import { app } from 'src/environments/environment.prod';
import { ModalController, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  logo:string     = app.icono.nivel_2;
  titulo:string   = app.nombre;
  autor:string    = app.autor;

  @ViewChild(IonSegment,{static:true}) segment:IonSegment;

  
  segmento:string = "person-information";

  constructor(  public modal: ModalController ) { }
  
  ngOnInit() {
    this.segment.value = 'person-information';
  }

  segmentChanged(event){
    this.segmento = event.detail.value;   
  }
  

  toggleMenu(){   
    this.modal.dismiss()
  }
}
