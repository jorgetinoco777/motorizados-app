import { Action } from "@ngrx/store";

import { User } from "../../models/user.class";

export const SET_USER = '[AUTH] Set User';
export const UNSET_USER = '[AUTH] Unset User';
export const USER_EXPIRED = '[AUTH] User Expired';

export class SetUserAction implements Action {

    readonly type = SET_USER;

    constructor( public user: User ) {}

}

export class UnsetUserAction implements Action {
    
    readonly type = UNSET_USER;

}

export class UserExpiredAction implements Action {

    readonly type = USER_EXPIRED;

    constructor( public uid: string, public email: string, public name: string, public image: string ) {}

}

// export class UserCor implements Action {

//     readonly type = USER_EXPIRED;

//     constructor( public uid: string, public email: string, public name: string, public image: string ) {}

// }

//TEST MARLON

export type actions = SetUserAction |
                      UnsetUserAction |
                      UserExpiredAction;