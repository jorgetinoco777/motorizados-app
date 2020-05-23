import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Utils } from '../utils/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  findAllProduct() {
    return this.http.get('https://catalogos-5f33b.firebaseio.com/enterprise/brand/products.json')
    .pipe(
      map( Utils.convert_to_array )
    );
  }

  loadImageByProduct( product_id: string ) {
    return this.http.get(`https://catalogos-5f33b.firebaseio.com/enterprise/brand/products/${ product_id }/images.json`);
    // .pipe(
    //   map( Utils.convert_to_array )
    // );
  }

}
