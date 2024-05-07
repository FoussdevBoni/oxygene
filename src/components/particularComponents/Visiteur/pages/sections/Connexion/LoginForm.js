import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../../../../../Backend/Actions/Set/auth";
import MyContext from "../../../../../../Contextes/MyContext";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import { Alert, Box, Snackbar } from "@mui/material";

export default function LoginForm({ userType }) {
  const { myVariable, setMyVariable } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const [isErr , setIsErr] = useState(false)
  const [serverError , setServerError] = useState('')
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const seConnecter = () => {
    const errors = {};


    // Vérification des champs vides
    if (email.trim() === "") {
      errors.email = "Ce champ est obligatoire.";
    }else  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      errors.email = 'Veuillez saisir une adresse e-mail valide.';
    }

    if (password === "") {
      errors.password = "Ce champ est obligatoire.";
    }

    // Vérification s'il y a des erreurs
    if (Object.keys(errors).length === 0) {
      setMyVariable((prevState) => ({
        ...prevState,
        connectedAS: userType,
      }));

      const user = {
        email: email,
        password: password,
      };

      login(user, userType, (err) => {
        setIsErr(true)
        setServerError(err)
      });
    } else {
      setFormErrors(errors);
    }
  };

  const handleModalClose = () => {
    setOpen(false);
    navigate("/");
    setMyVariable((prevState) => ({
      ...prevState,
      hidden: false,
    }));
  };
const handleCloseSnack = ()=>{
  setIsErr(false)
}
  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div className="container mx-auto w-90 h-70 bg-white  shadow-md border border-gray-300 rounded " style={{ marginTop: "20px ", padding: "30px" }}>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Se connecter</h2>
          </div>
            {
          isErr&&(   <Box sx={{ width: 500 }}>
      <Snackbar open={isErr} autoHideDuration={6000} onClose={handleCloseSnack}>
  <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
   {serverError}
  </Alert>
</Snackbar>
    </Box>)
        }
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Votre adresse e-mail
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => {
                        setEmail(e.target.value)

                       if (e.target.value.trim()!=='') {
                        setFormErrors((prevState)=>(
                        {
                          ...prevState,
                           email:  ''
                        }
                      ))
                       }else {
                         setFormErrors((prevState)=>(
                        {
                          ...prevState,
                           email:  'Ce champ est obligatoire'
                        }
                      ))
                       }
                      }}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 px-2       text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none ${formErrors.email !== "" && "border-red-500"}`}
                  />
                  {formErrors.email !== "" && <p className="text-red-500 text-sm">{formErrors.email}</p>}
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
                   onChange={(e) => {
                        setPassword(e.target.value)

                       if (e.target.value.trim()!=='') {
                        setFormErrors((prevState)=>(
                        {
                          ...prevState,
                           password:  ''
                        }
                      ))
                       }else {
                         setFormErrors((prevState)=>(
                        {
                          ...prevState,
                           password:  'Ce champ est obligatoire'
                        }
                      ))
                       }
                      }}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 px-2       text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none ${formErrors.password !== "" && "border-red-500"}`}
                  />
                  {formErrors.password !== "" && <p className="text-red-500 text-sm">{formErrors.password}</p>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="mb-2 md:mb-0 md:mr-2">
                  <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={seConnecter}>
                    S'identifier
                  </button>
                </div>
                <div>
                  <button className="flex w-full justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleModalClose}>
                    Annuler
                  </button>
                </div>
              </div>
            </div>

            {userType === "client" && (
              <p className="mt-10 text-center text-sm text-gray-500">
                Vous n'avez pas de compte?{" "}
                <NavLink
                  to="/inscription"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  onClick={() => {
                    setMyVariable((prevState) => ({
                      ...prevState,
                      connectedAS: "visitor",
                    }));
                  }}
                >
                  Créer gratuitement un compte
                </NavLink>
              </p>
            )}

            {userType === "worker" && (
              <p className="mt-10 text-center text-sm text-gray-500">
                Vous ne travaillez pas pour Oxygen?{" "}
                <NavLink
                  to="/devenir-prestataire"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  onClick={() => {
                    setMyVariable((prevState) => ({
                      ...prevState,
                      connectedAS: "visitor",
                    }));
                  }}
                >
                  Postuler maintenant
                </NavLink>
              </p>
            )}

            {userType === "partener" && (
              <p className="mt-10 text-center text-sm text-gray-500">
                N'êtes-vous pas vendeur sur Oxygen?{" "}
                <NavLink
                  to="/devenir-fournisseur"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  onClick={() => {
                    setMyVariable((prevState) => ({
                      ...prevState,
                      connectedAS: "visitor",
                    }));
                  }}
                >
                  Devenir fournisseur de produits d'urgence
                </NavLink>
              </p>
            )}
          </div>
          <div style={{ height: "100px" }}></div>
        </div>
       
      </Slide>
      
    </Modal>
  );
}
