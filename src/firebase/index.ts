import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    apiKey: "AIzaSyCoOJDtSlyzYaQ8Q1_z1Ox-g3wa96lw2js",
    authDomain: "login-40f85.firebaseapp.com",
    databaseURL: "https://login-40f85.firebaseio.com",
    storageBucket: "login-40f85.appspot.com",
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
