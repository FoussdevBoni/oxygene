import React, { useContext, useEffect, useState } from 'react';
import img1 from '../../../../../../../assets/img/portfolio/portfolio-1.jpg';
import img2 from '../../../../../../../assets/img/portfolio/portfolio-2.jpg';
import img3 from '../../../../../../../assets/img/portfolio/portfolio-3.jpg';

import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowForward } from '@material-ui/icons';
import { onValue, ref, set } from 'firebase/database';
import { db } from '../../../../../../../Backend/Data/config';
import { companyDefaulLogo } from '../../../../../../../data-center/data';
import MyContext from '../../../../../../../Contextes/MyContext';
import { dataSize } from '../../../../../../../Backend/Actions/Get/getData';
  const url = window.location.href
     const path = new URL(url).pathname;
      const parts = path.split('/');
     const userId = parts[3];
const Company = ({user , company }) => {
 const [productsNbr , setProductsNbr] = useState(0)
  
const navigate = useNavigate() ;
const { myVariable , setMyVariable} =  useContext(MyContext)


useEffect(()=>{
        const productRef = ref(db , 'products/'+company.userId)
               dataSize(productRef)
                  .then((size) => {
                  setProductsNbr(size)  ;
               })
},[])
  return (
   
       
          <div key={company.id} className="h-auto flex" style={{justifyContent:'space-between'}}>
                {
                  company.profile!==undefined ?
                   <img src={company.profile} alt={company.companyName} className="w-1/3  object-contain object-cover rounded" />:
                    <img src={companyDefaulLogo} alt={company.companyName} className="w-1/3  object-contain object-cover rounded" />
                }
            <div className=' ml-5'>
            <div className=" font-bold whitespace-nowrap truncate ">{company.companyName}</div>
            <p className="text-gray-500 -mt-1 whitespace-nowrap">{productsNbr} produits disponibles </p>
             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
             onClick={
              ()=>{
                navigate("/accounts/clients/"+userId+"/produits/"+company.companyName.replace(/[^A-Za-z0-9]/g, '-'))
                   set(ref(db, 'users/parteners/'+company.userId+'/visiteurs/'+user.userId), user)
                   setMyVariable(prevState => ({
                     ...prevState,
                     companySelected: company 
                 }))
                
              }
             }
             
             >Consulter</button>
            </div>
          </div>
     
       
    
  );
};

 const CompaniesList = ({title , user})=>{
  const [companies , setCompanies] = useState([]);
const navigate = useNavigate() ;
const { myVariable , setMyVariable} =  useContext(MyContext)
 useEffect(()=>{
 const dataRef = ref(db, 'users/parteners');
       
       
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          
          if (data) {

            // Convertir les données de la base de données en tableau
            const companiesData = Object.entries(data).map(([key, value]) => ({
              id: key,
              ...value,
            }));
           
             console.log(companiesData)
            setCompanies(companiesData)
          }
        });
  },[])

  if(companies.length!==0){
    return (
     <div className="container mx-auto py-8">
         <h6 className="font-bold mb-4">
            {title}
         </h6>
      <div className="space-y-6">
          {
            companies.map((company)=>{
             
              return(
                  <Company company={company} user={user} />

              )
            })
          }
        </div>
    </div>
  )
  }
};
export default  CompaniesList

export const Consultées=({title , user})=>{
 const [companies , setCompanies] = useState([]);
 const [consultes , setConsultes] = useState([]);

 useEffect(()=>{
 const dataRef = ref(db, 'users/parteners');
       
       
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          
          if (data) {

            // Convertir les données de la base de données en tableau
            const companiesData = Object.entries(data).map(([key, value]) => ({
              id: key,
              ...value,
            }));

          companiesData.map((company)=>{
                if (company.visiteurs!==undefined) {
                    setConsultes()
                }
              })
             console.log(companiesData)
            setCompanies(companiesData)
          }
        });
  },[])
 if (companies.length!==0) {
  return (
     <div className="container mx-auto py-8">
         <h6 className="font-bold mb-4">
            {title}
         </h6>
      <div className="space-y-6">
   {
            companies.map((company)=>{
               if (company.visiteurs!==undefined) {
                 if(company.visiteurs[user.userId]!==undefined){
                   return(
                  <Company company={company}/>

              )
                 }
               }
            })
          }
        </div>
    </div>
  )
 }
}


