import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardBody
} from "@material-tailwind/react";
import { aboutImage, services } from "../../../../data-center/data";
export function Categories() {
    const [step ,setStep] = useState(1)
    const [servicesSeleccted , setServicesSeleccted] = useState([])


useEffect(()=>{
    setStep(1)
}, [])
    {/*Render for step1 */}
    const  renderStep1 = ()=> {
       return (
    <div className="mt-12">
         <div className='mx-auto w-full h-200 bg-white   border-gray-300 rounded '>
               <h1 className='text-center text-3xl'>Que voulez-vous demander ?</h1>
          </div>
      <div className="grid grid-cols-3 gap-4 ">

          {
            services.map((e , index)=>{
                
                return(
    <Card className=" w-70 h-40 bg-white  shadow-md border border-gray-300 rounded" style={{cursor:'pointer'}}
    onClick={
        ()=>{
            setServicesSeleccted(e.services)
            setStep(2)
        }
    }
    >
      
      <CardBody className="p-4 text-left">
        <div className="w-10 h-10 bg-white   border-gray-300 rounded">
                    <img src= {e.logo} alt="" className= {
                        ` ${index===2 ? 'h-10' : ''}`
                    }/>

        </div>
        <Typography variant="small" className="font-normal text-blue-gray-600 ">
            <h6 className="font-bold mt-10">
              {e.category}
            </h6>
        </Typography>
      </CardBody>
    </Card>
                )
            })
          }
      </div>
    </div>
  );
    }
 

 {/**Render for step2 */}


  const renderStep2 = () => {
 
    return (
     <div className="container mx-auto w-90 h-70 bg-white  shadow-md border border-gray-300 rounded " style={{padding:'30px'}}>
        <h2 className="text-2xl font-bold mt-4">Choisir
 le service que vous souhaitez fournir :</h2>
        <div>
          {servicesSeleccted.map((option, index) => (
            <div key={index} className='flex items-center gap-x-3'>
              <input
                type="checkbox"
                name="selectedService"
                value={option}
            
                id={option}
                className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
              />
              <label htmlFor={option} className='block text-sm font-medium leading-6 text-gray-900'
              
              >{option}</label>
            </div>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={() => setStep(3)}
        >
          Suivant
        </button>
      </div>
    );
  };




  return (
    <div className="container mx-auto px-4 py-8">
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}

    </div>
  );
}



export default Categories;