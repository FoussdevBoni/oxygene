import { push, ref, set } from "firebase/database"
import { db } from "../../Data/config"

export const commandProduct = (client , seller , dataToSend )=>{
if (client!==undefined) {
 const clientDataRef = ref(db , 'commandes/'+client.userId)
const sellerDataRef = ref(db , 'commandes/'+seller.userId)
  push(clientDataRef , dataToSend).then(
    (res)=>{
        alert(res.key)
       set(ref(db, 'commandes/'+client.userId+'/'+res.key+'cmdKey'), res.key)
    }
  )
    push(sellerDataRef , dataToSend).then(
    (res)=>{
       set(ref(db, 'commandes/'+seller.userId+'/'+res.key+'cmdKey'), res.key)
    }
  )   
}
}