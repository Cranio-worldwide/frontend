import { createContext, useState } from 'react';

export const UI = createContext(undefined);

export function UIProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <UI.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </UI.Provider>
  );
}
