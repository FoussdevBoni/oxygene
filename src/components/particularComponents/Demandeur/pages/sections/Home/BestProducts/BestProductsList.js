import React, { useContext, useEffect, useState } from 'react';
import img6 from '../../../../../../../assets/img/portfolio/portfolio-6.jpg';
import img7 from '../../../../../../../assets/img/portfolio/portfolio-7.jpg';
import img8 from '../../../../../../../assets/img/portfolio/portfolio-8.jpg';
import { db } from '../../../../../../../Backend/Data/config';
import { NavLink } from 'react-router-dom';
import { ArrowForward } from '@material-ui/icons';
import { onValue, ref } from 'firebase/database';
import MyContext from '../../../../../../../Contextes/MyContext';
import { Container, Modal, Slide } from '@mui/material';
import BuyProduct from '../../../../../../generalComponents/ShoppingForm/ShoppingForm';
import ProductDetails from '../../../../../../generalComponents/ProductDetails/ProductDetails';
import BestProductsBox from './BestProductsBox';
const ProductList = ({user}) => {
const [search , setSearch] = useState('')
let filteredProducts = []
  const [products , setProducts] = useState([[]])
   const  {myVariable , setMyVariable} = useContext(MyContext)
   const[ openForm , setOpenForm] = useState(false)
  useEffect(()=>{
 const dataRef = ref(db, 'products/all');
       
       
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          
          if (data) {

            // Convertir les données de la base de données en tableau
            const productsData = Object.entries(data).map(([key, value]) => ({
              id: key,
              ...value,
            }));

             console.log(productsData)
            setProducts(productsData.reverse())
          }
        });
  },[])
if (products.length !== 0) {
  filteredProducts = products.filter((product) => {
    if (product.productName) {
      return product.productName.toLowerCase().includes(search.toLowerCase());
    }
    return false;
  });
}








function closeForm(){
    setMyVariable(prevState => ({
                     ...prevState,
                     productSelectedB: null 
 }))
}
const returnNull = ()=>{
      setMyVariable(prevState => ({
                     ...prevState,
                     productSelectedB: null 
 }))
}
  const pages = [
    { id: 1, name: 'Paracetamol', price: 1000, image: img6 },
    { id: 2, name: 'Pommade anti-inflammatoire', price: 500, image: img7 },
    { id: 3, name: 'Eau oxygenée', price: 2000, image: img8 },
    // Ajoutez d'autres pages ici
  ];

  return (
    <div className="container mx-auto py-8 mt-60" style={{marginTop:'80px'}}>
    <h6 className="font-bold mb-4">Découvrez les meilleurs produits près de
    chez vous  </h6>
     
                
              
                    {
                      myVariable.productSelectedB!==null && (
            <ProductDetails   user={user} child={<BestProductsBox user={user} />} setContentData={returnNull}/> 
                      )  
                    }

                   
             
             
      <div className="space-y-4">
          <div class="header-search-container">

          <input type="search" name="search" class="search-field outline-none" placeholder="Que cherchez-vous ?.." 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          />

          <button class="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

        </div>
        {filteredProducts.map((product) => (
          <div key={product.productId} className="bg-white  shadow-md rounded ">
            <img src={product.productImage} alt={product.productName} className="w-full h-32 object-cover mb-4" />
            <div className='flex p-2' style={{justifyContent:'space-between'}}>
             <div>
                <h3 className="text-lg font-bold mb-2">{product.productName}</h3>
               <p className="text-gray-500 ">{product.productPrice} F CFA</p>
             </div>
              <div className=''>
                 <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                 onClick={
                    ()=>{
                        setMyVariable(prevState => ({
                     ...prevState,
                     productSelectedB: product 
                  }))
                    }
                 }
                 >Acheter</button>
              </div>
            </div>
          </div>
        ))}
          <div className='w-full'>

            {
              filteredProducts.length===0&& (
               <div>
                Aucun produit produit
               </div>
              )
            }
         
        </div>
      </div>
    </div>
  );
};

export default ProductList;
