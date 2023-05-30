import React, { useState } from 'react';
import RegistrationForm from './RegisterScreen';

const BecomeWorker = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    city: ''
  });

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleSelectedServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('serviceType', serviceType);
    localStorage.setItem('selectedService', selectedService);
    localStorage.setItem('formData', JSON.stringify(formData));
    // Logique de soumission du formulaire
    console.log('Formulaire soumis');
  };

  const renderStep1 = () => (
  <div className="container mx-auto w-90 h-70 bg-white  shadow-md border border-gray-300 rounded " style={{marginTop:'200px ',padding:'30px'}}>      <h2 className="text-2xl font-bold mb-4">Quels services voulez-vous fournir ?</h2>
      <div  className='flex items-center gap-x-3'>
        <input
          type="radio"
          name="serviceType"
          value="tache-domestique"
          onChange={handleServiceTypeChange}
          checked={serviceType === 'tache-domestique'}
          id="tache-domestique"
          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
        <label htmlFor="tache-domestique" className='block text-sm font-medium leading-6 text-gray-900'>Je veux faire des tâches domestiques</label>
      </div>
      <div  className='flex items-center gap-x-3'>
        <input
          type="radio"
          name="serviceType"
          value="professionnel-sante"
          onChange={handleServiceTypeChange}
          checked={serviceType === 'professionnel-sante'}
          id="professionnel-sante"
          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
        <label htmlFor="professionnel-sante"
        className='block text-sm font-medium leading-6 text-gray-900'
        >Je suis un professionnel de santé</label>
      </div>
      <div  className='flex items-center gap-x-3'>
        <input
          type="radio"
          name="serviceType"
          value="fournisseur-urgence"
          onChange={handleServiceTypeChange}
          checked={serviceType === 'fournisseur-urgence'}
          id="fournisseur-urgence"
          className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600'
        />
        <label htmlFor="fournisseur-urgence"
        className='block text-sm font-medium leading-6 text-gray-900'
        >Je suis un fournisseur de produits d'urgence</label>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={() => setStep(2)}
      >
        Suivant
      </button>
    </div>
  );

  const renderStep2 = () => {
    let options = [];

    if (serviceType === 'tache-domestique') {
      options = ['Option 1', 'Option 2', 'Option 3'];
    } else if (serviceType === 'professionnel-sante') {
      options = ['Option A', 'Option B', 'Option C'];
    } else if (serviceType === 'fournisseur-urgence') {
      options = ['Option X', 'Option Y', 'Option Z'];
    }

    return (
     <div className="container mx-auto w-90 h-70 bg-white  shadow-md border border-gray-300 rounded " style={{marginTop:'200px ',padding:'30px'}}>
        <h2 className="text-2xl font-bold mb-4">Cho
 le service que vous souhaitez fournir :</h2>
        <div>
          {options.map((option, index) => (
            <div key={index} className='flex items-center gap-x-3'>
              <input
                type="radio"
                name="selectedService"
                value={option}
                onChange={handleSelectedServiceChange}
                checked={selectedService === option}
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

  const renderStep3 = () => {
     return (
    <div className="container mx-auto w-90 h-70 bg-white  shadow-md border border-gray-300 rounded " style={{marginTop:'200px ',padding:'30px'}}>
      <h2 className="text-2xl font-bold mb-4 text-center">Devenir prestataire</h2>
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
           Soumettre ma canditature
        </button>

    </div>
    
        <div style={{height:'100px'}}></div>
          </div>
    </div>
  );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </div>
  );
};

export default BecomeWorker;
