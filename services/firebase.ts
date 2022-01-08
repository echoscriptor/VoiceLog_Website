import {initializeApp, FirebaseApp, FirebaseOptions, getApp, getApps} from 'firebase/app'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var app : FirebaseApp
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig : FirebaseOptions = {
  // You config details
};

// Initialize Firebase

if(getApps.length){
    app = getApp()
}else{
    app = initializeApp(firebaseConfig)
}

export default app