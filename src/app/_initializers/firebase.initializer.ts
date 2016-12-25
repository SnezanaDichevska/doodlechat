import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyDlp5CdpLG1G7oljHVXnp5_tFeqeWTWrD0",
    authDomain: "doodlechat-131e2.firebaseapp.com",
    databaseURL: "https://doodlechat-131e2.firebaseio.com",
    storageBucket: "doodlechat-131e2.appspot.com",
    messagingSenderId: "89190610295"
};
export const firebaseModule = AngularFireModule.initializeApp(firebaseConfig)