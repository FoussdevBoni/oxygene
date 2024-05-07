import { onValue } from "firebase/database";

 export const getUser=(usersRef)=>{


    // Abonnez-vous aux modifications de la base de données Firebase Realtime
    onValue(usersRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        return userData
        // Convertir les données de la base de données en tableau
  
      }
    });


}