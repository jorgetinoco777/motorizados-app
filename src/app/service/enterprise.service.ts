import { Injectable } from '@angular/core';
import { Enterprise } from '../redux/main/main.reducer';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment, app } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  URL:string;
  //mulltimarca- data quemada 
  multi_brand:any; 

  constructor( private http:HttpClient) { 
    this.URL = `${ environment.firebaseConfig.databaseURL }`;
    this.multi_brand          =  app.multi_brand;
  }


  
  getInfoEnterprise(){
    const url = `${this.URL}/business/${this.multi_brand.business_id}/brands/${this.multi_brand.brands_id}/stores/${this.multi_brand.store_id}.json`;
 
    return this.http.get(url)
    .pipe( 
      map( ( res:any ) => {
        let enterprise:Enterprise; 
        let polygonos_app:any[] = [];
          
          if (!res.polygons)
            return { ...enterprise };

        
         enterprise = {
          id:res.id,
          name:res.name,
          default_point: {
           lat: res.position.latitude,
           lng: res.position.longitude
          },
          polygons: polygonos_app ,
          minimum_order:res.minimum_order
        };

 
        return { ...enterprise };
        }
      )  
    )
  }
  
}
