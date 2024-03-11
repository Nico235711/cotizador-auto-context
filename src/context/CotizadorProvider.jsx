import { createContext, useState } from "react";

const CotizadorContext = createContext()

export const CotizadorProvider = ({ children }) => {

  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: ""
  })
  const handleChangeData = e => {
    // tomo una copia del objeto para evitar pisar los datos
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeData
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorContext