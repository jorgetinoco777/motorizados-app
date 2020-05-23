// import { Action } from '@ngrx/store'
import * as redux  from './main.actions'
import { ESTADOS_TRANSACCION } from 'src/environments/environment'


export interface transaccion {
  contadorCarrito?:number;
  estadoTransaccion?:string;
  numeroTransaccion?:string;
  productos?:any;
}

const stateInicial:transaccion = {
  contadorCarrito:0,
  estadoTransaccion:ESTADOS_TRANSACCION.MIRANDO,
  numeroTransaccion: null,
  productos:null
}


export function mainReducer( state = stateInicial , action:redux.actions):transaccion {
    switch (action.type) { 
        case redux.UPDATE_TRANSACCION:
          return {
            ...action.transaccion
          }
        case redux.RESET_TRANSACCION:
            return {
              numeroTransaccion : null,
              contadorCarrito: 0,
              estadoTransaccion : ESTADOS_TRANSACCION.MIRANDO,
              productos:null
            }        
        default:
          return state
      }
}


export interface Tracking {
  latiude?:any;
  longitude?:any;
  id?:string;
  main_street?:string;
  secondary_street?:string;
  google_reference?:string;
  alias?:string;
  zone?:string;
  phone?:number;
  home_phone?:number;
  
}
const stateTracking:Tracking = {
  latiude:null,
  longitude:null,
  main_street:null,
  secondary_street:null,
  google_reference: null,
  id:null,
  alias:null,
  zone:null,
  phone:null,
  home_phone:null
}
export function trackingReducer (  state = stateTracking , action:redux.actions):Tracking {
  switch (action.type) {
    case redux.RESET_TRACKING:
      return {
        ...action.tracking
      }
    default:
      return state;
  }
}




export interface Enterprise {
  id:string,
  name:string;
  polygons?:any;
  default_point:any;
  minimum_order:number;
}
const stateEnterprise:Enterprise = {
   id:null,
   name:null,
   polygons:[],
   default_point:[],
   minimum_order:0
}

export function enterpriseReducer (  state = stateEnterprise , action:redux.actions):Enterprise {
  switch (action.type) {
    case redux.RESET_ENTERPRISE:
      return {
        ...action.enterprise
      }
    default:
      return state;
  }
}

