import React, { createContext } from 'react';

const MyContext = createContext();

export default MyContext;



export const MyProvider = (props) => {
    const [myVariable, setMyVariable] = React.useState({
        isPresta: true,
        liens: [],
        connectedAS: '',
        route: 'Salut !',
        registered: false,
        demandeur: null,
        selected: null,
        openMobile: false, 
        hiddenDrawer: false, 
        open: false,
        hidden: false,
        openForm: false , 
        achatSelected: null,
        companySelected: null, 
        demandeSelected: null , 
        chatSelected: null,
        commandeSelected: null,
        productSelected: null,
        productSelectedB: null ,
        activeMenuIndex: 0,
        
    });
    return (
      <MyContext.Provider value={{ myVariable, setMyVariable }}>
        {props.children}
      </MyContext.Provider>
    );
  };