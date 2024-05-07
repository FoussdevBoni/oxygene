import { push, ref, set } from "firebase/database"
import { db } from "../../Data/config"

export const sendNotifs = (sender, receiver , body)=>{
    const dataRef2 = ref(db, 'notifications/'+receiver.userId)
  push(dataRef2 , body).then(
    (res)=>{
      set(ref(db,'notifications/'+receiver.userId+'/notifKey'), res.key)
    }
  )
}