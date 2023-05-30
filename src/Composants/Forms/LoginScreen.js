import React ,{ useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MyContext from "../../Contextes/MyContext";


export default function LoginScreen() {
const {myVariable , setMyVariable} = useContext(MyContext)
const [email , setEmail] = useState('')
const connect = useNavigate ()
  const login = ()=>{
    localStorage.setItem('connected', email)
        setMyVariable(prevState => ({
              ...prevState,
              connected: true

      }))

      connect('/accounts/'+email.replace(/[^\w\s]/gi, ""))
  }
  return (
    
     <div className="container mx-auto w-90 h-70 bg-white  shadow-md border border-gray-300 rounded " style={{marginTop:'200px ',padding:'30px'}}>
      
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Se connecter
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Votre adresse e-mail
              </label>
              <div className="mt-2">
                <input
                onChange={
                  (e)=>{
                    setEmail(e.target.value)
                  }
                }
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                   className="block w-full rounded-md border-0 py-1.5 px-2       text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Votre mot de passe
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                    className="block w-full rounded-md border-0 py-1.5 px-2       text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none"
                />
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={
                  ()=>{
                    login()
                  }
                }
              >
                S'identifier
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Vous n'avez pas de compte?{' '}
            <NavLink  to="/inscription" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Créer gretuitement un compte
            </NavLink>
          </p>
        </div>
        <div style={{height:'100px'}}></div>
      </div>
    
  )
}
