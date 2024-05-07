import { push, ref, set } from "firebase/database"
import { db } from "../../Data/config"

export const publishProduct = (data , posterId) =>{
  const dataRef = ref(db , 'products/'+posterId)
  push(dataRef , data).then(
    (product)=>{
        set(ref(db , 'products/'+posterId+'/'+product.key+'/productId') , product.key)
    }
  )


  const dataRef2 = ref(db , 'products/all')
  push(dataRef2 , data).then(
    (product)=>{
        set(ref(db , 'products/all/'+product.key+'/productId') , product.key)
    }
  )
}