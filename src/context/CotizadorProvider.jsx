import { createContext } from "react";

const CotizadorContext = createContext()

export const CotizadorProvider = ({ children }) => {  
  
  const hola = "Hola desde context"

  return (
    <CotizadorContext.Provider
      value={{
        hola
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorContext