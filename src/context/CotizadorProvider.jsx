import { createContext, useState } from "react";
import { obtenerDiffYear } from "../helpers";

const CotizadorContext = createContext()

export const CotizadorProvider = ({ children }) => {

  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: ""
  })

  const [error, setError] = useState("")

  const handleChangeData = e => {
    // tomo una copia del objeto para evitar pisar los datos
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {  
    // base
    let resultado = 2000

    // obtener la diferencia de años
    const diferencia = obtenerDiffYear(datos.year)
    
    // restar 3% por cada año
    resultado -= (resultado * diferencia * .03)

    // asíatico: 5%
    // europeo: 15%
    // americano: 30%

    // básico: 20%
    // completo: 50%
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeData,
        error,
        setError,
        cotizarSeguro
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorContext