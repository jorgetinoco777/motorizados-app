import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { app } from 'src/environments/environment.prod';
  
@Component({
  selector: 'app-my-deliverys',
  templateUrl: './my-deliverys.page.html',
  styleUrls: ['./my-deliverys.page.scss'],
})
export class MyDeliverysPage implements OnInit {

  logo:string     = app.icono.nivel_2;
  titulo:string   = app.nombre;
  autor:string    = app.autor;
 
  constructor(private modal:ModalController) { }

  ngOnInit() {
  }

  toggleMenu(){   
    this.modal.dismiss()
  }

 
 
}
