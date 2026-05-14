import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDe2O5JfEXI_O7treOhNlOS3M7SElpon0Q",

  authDomain: "cortex-academy-70feb.firebaseapp.com",

  projectId: "cortex-academy-70feb",

  storageBucket: "cortex-academy-70feb.firebasestorage.app",

  messagingSenderId: "1098088699033",

  appId: "1:1098088699033:web:b15e18ef5e17d4e75a9408",

  measurementId: "G-TC5L6CYCNP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);