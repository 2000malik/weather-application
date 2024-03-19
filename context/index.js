import { createContext, useState } from 'react';

export const AppContext = createContext({});

export default function AppContainer({ children }) {
  const [unitConversion, setUnitConversion] = useState('imperial');
 

  return (
    <AppContext.Provider
      value={{ unitConversion, setUnitConversion, }}>
      {children}
    </AppContext.Provider>
  );
}
