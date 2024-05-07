import React, { useState } from 'react';
import { Page, Navbar, List, ListItem,Button,Block, ListInput } from 'framework7-react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { get, getDatabase, ref, set } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
   apiKey: "AIzaSyAXLHplrehviTGXhcP1SReb4HhJPccCOck",
  authDomain: "oxygene-e4a9f.firebaseapp.com",
  databaseURL: "https://oxygene-e4a9f-default-rtdb.firebaseio.com",
  projectId: "oxygene-e4a9f",
  storageBucket: "oxygene-e4a9f.appspot.com",
  messagingSenderId: "26084428581",
  appId: "1:26084428581:web:86d022842bf2ae3249e8cc",
  measurementId: "G-2C94D4PFNE"
};

const app = initializeApp(firebaseConfig);


// Constante pour realtime Database 
export const db = getDatabase(app);
//Constante pour authentification
export  const auth = getAuth(app);
export const  storage  = getStorage(app);









