import React, { createContext } from 'react';

const MyContext = createContext();

export default MyContext;



export const MyProvider = (props) => {
    const [myVariable, setMyVariable] = React.useState({
        isPresta: true,
        liens: [],
        connected: false        
    });
    return (
      <MyContext.Provider value={{ myVariable, setMyVariable }}>
        {props.children}
      </MyContext.Provider>
    );
  };