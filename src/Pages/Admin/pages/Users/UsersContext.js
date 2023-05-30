import React, { createContext } from 'react';

const UsersContext = createContext();

export default UsersContext;



export const UsersProvider = (props) => {
    const [usersVariables, setUsersVariables] = React.useState({
        isClicked: false,
        
    });
    return (
      <UsersContext.Provider value={{ usersVariables, setUsersVariables }}>
        {props.children}
      </UsersContext.Provider>
    );
  };