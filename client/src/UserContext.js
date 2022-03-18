import React, { createContext, useState, useCallback, useMemo } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    // the value that will be given to the context
    const [user, setUser] = useState(null);
  
    // sign out the user, memoized
    const signout = useCallback(() => {
      setUser(null);
    }, []);
  
    const contextValue = useMemo(() => ({
      user,
      signout
    }), [user, signout])
  
    return (
      // the Provider gives access to the context to its children
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    );
  };

  export { UserContext, UserContextProvider };
