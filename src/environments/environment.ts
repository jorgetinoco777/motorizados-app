
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDs4l-ci5DluSEcJqhTxKWLXiAnuf2X1Eg",
    authDomain: "alpaso-e0fc9.firebaseapp.com",
    databaseURL: "https://alpaso-e0fc9.firebaseio.com",
    projectId: "alpaso-e0fc9",
    storageBucket: "alpaso-e0fc9.appspot.com",
    messagingSenderId: "292927541673",
    appId: "1:292927541673:web:de8411c9e8cf8af7a0f4b8"
  }
};






//HTTP PROTOCOL
export const HTTP_PROTOCOL = 'https';

//API KEY FIREBASE
// export const API_KEY = 'AIzaSyBRCt9jvzr_UkYTHRpImJTXYxb4FDgDP2Q';

//GOOGLE AUTHENTICATED
export const GOOGLE_AUTHENTICATED = 'identitytoolkit.googleapis.com';


//USERS
export const USER_SERVER = 'personas-9043a.firebaseio.com';

// USERS - CLOUD FUNCTIONS 
export const USER_API_TRANSACTION_SERVER = 'us-central1-personas-9043a.cloudfunctions.net';


// CONFIGURACIONES
export const SUGGESTIONS_SERVER = 'el-mercadito-83e4c.firebaseio.com';


/// TRANSACTION - DESPACHOS
export const DESPACHOS_SERVER = 'us-central1-despacho-60c61.cloudfunctions.net';


// TRANSACCIONES CARRITO DE COMPRAS 
export const TRANSACTIONS_SERVER = 'us-central1-catalogos-5f33b.cloudfunctions.net';


//PROJECT CATALOGS FIREBASE
export const CATALOGS_SERVER = 'catalogos-5f33b.firebaseio.com';



//Days
export const DAYS_NAME = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGOS'];



 


// al paso app
export const app = {
  autor : "./assets/Go_apps.png",
  nombre : "Al Paso",
  multi_brand: { 
    business_id:"-M5NhkssETCcA9HQlDwZ",
    brands_id:"-LtLoJ6UXl-qyecGVLmu",
    store_id:"-M5NhMG-oyAUuUcpZc3d"
  },
  icono: {
    nivel_1:"./assets/Logos/Icon_Alpaso_1.png",
    nivel_2:"./assets/Logos/Logo_Alpaso_1.png",
    nivel_3:"./assets/Logos/Icon_Alpaso_1.png",
    nivel_4:"./assets/Logos/Icon_Alpaso_1.png",
    default_avatar:"./assets/Logos/default_avatar.png",
    default_shop:"./assets/Logos/default_shop.png"
  },
  maps : {
    marcador:"./assets/Logos/ubi.png", //imagen del marcador
  }
}



// redux 
export const ESTADOS_TRANSACCION = {
  MIRANDO :"MIRANDO",
  COMPRANDO :"COMPRANDO",
  PAGANDO :"PAGANDO"
}



// base de datos 
export const ESTADOS_TRANSACCION_BD = {
  RECIBIDO :"RECIBIDO",
  ACEPTADO:"ACEPTADO",
  NO_EXISTE:"NO EXISTE",
  DESPACHANDO:"DESPACHANDO",
  EN_CAMINO:"EN CAMINO",
  ENTREGADO:"ENTREGADO",
  EN_PROCESO:"EN PROCESO",
  ANULADO :"ANULADO"
}



export const styles_google = [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];