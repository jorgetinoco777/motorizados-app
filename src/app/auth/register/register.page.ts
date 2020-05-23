import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild(IonSegment,{static:true}) segment:IonSegment;

  
  segmento:string = "person-information";
  constructor(  public router: Router ) { }
  ngOnInit() {
    this.segment.value = 'person-information';

  }

  segmentChanged(event){
    this.segmento = event.detail.value;   
  }



  goToLogin() {
    this.router.navigate(['/login']);
  }


}
