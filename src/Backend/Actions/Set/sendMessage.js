import { push, ref, set } from "firebase/database";
import { db } from "../../Data/config";

export const sendMessage = (user, receiver , message , callBack)=>{
   if (user!==undefined&&receiver!==undefined) {
     const dataRef1 = ref(db, 'messages/'+user.userId+'/'+receiver.userId)
     const dataRef2 = ref(db, 'messages/'+receiver.userId+'/'+user.userId)
      push(dataRef2 , message).then(
        ()=> callBack
      )

          push(dataRef1 , message).then(
        ()=>{
          // Création de la liste historique  de discussions 
            set(ref(db , 'chatList/'+user.userId+'/'+receiver.userId), message)
            set(ref(db , 'chatList/'+receiver.userId+'/'+user.userId), message)

        }
      )
   }
}