import { marcas, planes } from "../constants"
import { useCotizador } from "../hooks/useCotizador"

export const Cotizacion = () => {

  const { datos, cotizacion } = useCotizador()
  const { marca, year } = datos

  if (!cotizacion) {
    return null
  }

  return (
    <div className="mt-5 text-center bg-gray-100 p-2 shadow rounded">
      <h2 className="uppercase text-3xl text-gray-700 font-black mb-5">Resumen</h2>
      <p className="mb-2 text-lg font-bold text-gray-400">Marca del Auto: {""}
        <span className="text-black">{marcas[marca].nombre}</span>
      </p>
      <p className="mb-2 text-lg font-bold text-gray-400">Año del Auto: {""}
        <span className="text-black">{year}</span>
      </p>
      <p className="mb-2 text-lg font-bold text-gray-400">Plan: {""}
        <span className="text-black">{planes[plan].nombre}</span>
      </p>
      <p className="mb-2 text-lg font-bold text-gray-400">Monto a Pagar: {""}
        <span className="text-black">{cotizacion}</span>
      </p>
    </div>
  )
}
