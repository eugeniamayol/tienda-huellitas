import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACTUNHoDT-nRghcaqAE7T4WRxnJRIDNRg",
  authDomain: "tienda-huellitas.firebaseapp.com",
  projectId: "tienda-huellitas",
  storageBucket: "tienda-huellitas.appspot.com",
  messagingSenderId: "715779917049",
  appId: "1:715779917049:web:22b8da693ddee41cec8e28"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
} 