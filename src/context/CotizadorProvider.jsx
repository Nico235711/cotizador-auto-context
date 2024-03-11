import { createContext } from "react";

const CotizadorContext = createContext()

export const CotizadorProvider = ({ children }) => {  
  
  return (
    <CotizadorContext.Provider
      value={{

      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorContext