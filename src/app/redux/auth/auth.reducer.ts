import * as fromAuth from './../auth/auth.actions';

//Models
import { User } from "../../models/user.class";

export interface AuthState {
    user: User;
}

const initState: AuthState = {
    user: null
}

export function authReducer( state = initState, action: fromAuth.actions ): AuthState {
    switch ( action.type ) {
        case fromAuth.SET_USER:
            return {
                user: {
                    ...action.user
                }
            }

        case fromAuth.UNSET_USER:
            return {
                user: null
            }
        
        case fromAuth.USER_EXPIRED:
            return {
                user: {
                    uid: action.uid,
                    email: action.email,
                    name: action.name,
                    image: action.image,
                    status: 'EXPIRED'
                }
            }
        
        default:
            return state;
    }
}
 