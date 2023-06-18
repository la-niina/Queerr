import React, { createContext, useState } from 'react';

export const SharedContext = createContext();

export const SharedContextProvider = ({ children }) => {
  const [showAction, setShowAction] = useState(false);

  const toggleAction = () => {
    setShowAction(!showAction);
  };

  return (
    <SharedContext.Provider value={{ showAction, toggleAction }}>
      {children}
    </SharedContext.Provider>
  );
};