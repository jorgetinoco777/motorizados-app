import { Action } from '@ngrx/store';
import { transaccion, Tracking, Enterprise } from './main.reducer';

export const UPDATE_TRANSACCION = "[UPDATE_TRANSAC] - Update state transaction" ;
export const RESET_TRANSACCION = "[RESET_TRANSAC]" ;


export class UpdateTransaccionAction implements Action {
    readonly type = UPDATE_TRANSACCION;
    constructor( public transaccion:transaccion ) {}
}

export class ResetTransaccionCarritoAction implements Action {
    readonly type = RESET_TRANSACCION;
}





// Tracking

export const RESET_TRACKING = "[RESET_TRACKING] Resetea corrdenadas de Tracking" ;

export class ResetTrackingAction implements Action {
    readonly type = RESET_TRACKING;
    constructor( public tracking:Tracking ) {}
}




// enterprise 
export const RESET_ENTERPRISE = "[RESET_ENTERPRISE]" ;

export class ResetEnterpriseAction implements Action {
    readonly type = RESET_ENTERPRISE;
    constructor( public enterprise:Enterprise ) {}
}



 
  


export type actions =   UpdateTransaccionAction |
                        ResetTransaccionCarritoAction|
                        
                        // Tracking
                        ResetTrackingAction|


                        // enterprise 
                        ResetEnterpriseAction;
 