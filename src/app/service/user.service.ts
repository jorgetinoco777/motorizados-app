import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

//Const
 
//Model
import { User } from '../models/user.class';
import { HTTP_PROTOCOL, USER_SERVER } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    url: string;
    name_function: string;
    headers = new HttpHeaders();

  constructor( private http: HttpClient ) {
    this.headers.set("Content-Type", "application/jon");
    this.url = `${ HTTP_PROTOCOL }://${ USER_SERVER }`;
  }

  register( uid: string, user: User ) {
    this.name_function = `${ uid }.json`;
    return this.http.patch(`${ this.url }/${ this.name_function }`, { headers: this.headers, ...user });
  }

  findUserByUID( uid: string ) {
    this.name_function = `${ uid }.json`;
    return this.http.get(`${ this.url }/${ this.name_function }`);
  }
}
