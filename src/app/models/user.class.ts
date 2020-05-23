export class User {
    uid?: string;
    name?: string;
    email: string;
    token?: string;
    image?: string;
    password?: string;
    confirmPassword?:string;
    accept_terms?: boolean;
    age?:number;
    status?: string;
    type?:string;
    adress?:any;
    personal_phone?:string;
    cedula?:string;

    information?:boolean;
    push_notifications?:boolean;
    mailing?:boolean;
}