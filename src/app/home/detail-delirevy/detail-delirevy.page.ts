import { Component, OnInit } from '@angular/core';
import { app } from 'src/environments/environment.prod';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-delirevy',
  templateUrl: './detail-delirevy.page.html',
  styleUrls: ['./detail-delirevy.page.scss'],
})
export class DetailDelirevyPage implements OnInit {

  logo:string     = app.icono.nivel_2;
  titulo:string   = app.nombre;
  autor:string    = app.autor;
  constructor(  public modal: ModalController ) { }

  ngOnInit() {
  }

  
  toggleMenu(){   
    this.modal.dismiss()
  }
}
