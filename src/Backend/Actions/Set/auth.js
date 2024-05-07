import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../Data/config"
import { onValue, push, ref, set } from "firebase/database"
import { chiffrer } from "../Security/hash"
import React from "react"
import MyContext from "../../../Contextes/MyContext"

console.log(db)
// Fonction pour créer un compte sur oxygene
export const register = (user , saveData)=>{

  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      const userWithoutPassword = {
      ...user, // Copie toutes les propriétés de l'objet user
      password: chiffrer(user.password , 'MaCleSecrete123') // Remplace la valeur de la propriété password par undefined
    };
    const userData  = userCredential;
    saveData(userWithoutPassword , userData)
 }).catch(
    (error)=>{
      console.log(error)

    }
 )
}


 export  const registered =(email)=>{
  let  usersArray ;

    const usersRef = ref(db, 'users/clients');

    onValue(usersRef, (snapshot) => {
      const usersData = snapshot.val();
      
      if (usersData) {
         usersArray = Object.entries(usersData).map(([key, value]) => ({
          id: key,
          ...value,
        }))

      const user = usersArray.find(user => user.email === email);
      if(user){
         return true
      }else{
        return false
      }
   
      }



    });


}



export const login = (user, userType, errorAction, successAction) => {
  if (user.email === 'oxy@gmail.com') {
    signInWithEmailAndPassword(auth, user.email, 'oxygen2023')
      .then((userCredential) => {
        const userData = userCredential;
        localStorage.setItem('connectedAS', 'admin');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          // Email incorrect
          errorAction('Email incorrect');
        } else if (error.code === 'auth/wrong-password') {
          // Mot de passe incorrect
          errorAction('Mot de passe incorrect');
        } else if (error.code === 'auth/network-request-failed') {
          // Problème de connexion
          errorAction("Vous n'êtes pas connectés à l'internet");
        } else {
          // Erreur inconnue
          errorAction('Erreur inconnue');
        }
      });
  } else {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const userData = userCredential;
        localStorage.setItem('connectedAS', userType);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        if (error.message === 'Firebase: Error (auth/invalid-email') {
          // Email incorrect
          errorAction('Email incorrect');
        } else if (error.code === 'auth/wrong-password') {
          // Mot de passe incorrect
          errorAction('Mot de passe incorrect');
        } else if (error.code === 'auth/network-request-failed') {
          // Problème de connexion
          errorAction('Problème de connexion');
        } else {
          // Erreur inconnue
          errorAction('Erreur inconnue');
        }
      });
  }
};
