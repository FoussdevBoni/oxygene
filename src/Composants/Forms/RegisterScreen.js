import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log(formData);
  };

  return (
    <div className="container mx-auto w-90 h-70 bg-white  shadow-md border border-gray-300 rounded " style={{marginTop:'200px ',padding:'30px'}}>
      <h2 className="text-2xl font-bold mb-4 text-center">S'inscrire</h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                 Adresse  e-mail
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder='foussdev2004@gmail.com'
                  name="email"
                  id="email"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 px-2       text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                   Créer un mot de passe 
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                   Confirmer votre mot de passe 
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 px-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Prénom(s)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  placeholder='Fousséni'
                  id="first-name"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                   Nom de famille 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder='BONI'
                  name="last-name"
                  id="last-name"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
  
  
  
  
  
  
                Votre numéro de téléphone
              </label>
              <div className="mt-2">
                <input
                  type="phone"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>
    <div className="sm:col-span-2">
        <button type="button"  className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none  bg-indigo-600 text-white shadow-sm hover:bg-indigo-500">
          Soumettre
        </button>

    </div>
     <div className="sm:col-span-2">

        <button
          type="submit"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none  bg-red-600 text-white shadow-sm hover:bg-red-500"
          style={{backgroundColor:'hsl(353, 100%, 78%)'}}
        >
          Annuler 
        </button>
        </div>
        <div style={{height:'100px'}}></div>
          </div>
    </div>
  );
};

export default RegistrationForm;