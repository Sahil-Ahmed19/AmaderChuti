import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import {getAuth, provideAuth} from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqyRN4tYZyVSGCgY-yrpBB6wwYel3LMUs",
  authDomain: "amader-chuti.firebaseapp.com",
  projectId: "amader-chuti",
  storageBucket: "amader-chuti.appspot.com",
  messagingSenderId: "840569320824",
  appId: "1:840569320824:web:38f2436ddcbd0e3ef5848d",
  measurementId: "G-VLQ6PP3P7D"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ])
  ]
};
