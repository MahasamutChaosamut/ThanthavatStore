import { createContext, useState, useContext } from 'react';

const productContext = createContext({} as any);

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState('');
  return (
    <productContext.Provider value={{ product, setProduct }}>
      {children}
    </productContext.Provider>
  );
};

export const useProduct = () => useContext(productContext);
