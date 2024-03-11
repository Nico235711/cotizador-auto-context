import { createContext } from "react";

const CotizadorContext = createContext()

export const CotizadorProvider = ({ children }) => {  
  <CotizadorContext.Provider
    value={{

    }}
  >
    {children}
  </CotizadorContext.Provider>
}

export default CotizadorContext