import { useCotizador } from "../hooks/useCotizador"

export const Cotizacion = () => {

  const { datos, cotizacion } = useCotizador()
  const { marca, year } = datos

  if (!cotizacion) {
    return null
  }

  return (
    <div className="mt-5 text-center bg-gray-100 p-2 shadow rounded">
      <p className="mb-2 text-lg font-bold text-gray-400">Marca del Auto: {""}
        <span className="text-black">{marca}</span>
      </p>
      <p className="mb-2 text-lg font-bold text-gray-400">Año del Auto: {""}
        <span className="text-black">{year}</span>
      </p>
      <p className="mb-2 text-lg font-bold text-gray-400">Plan: {""}
        <span className="text-black"></span>
      </p>
      <p className="mb-2 text-lg font-bold text-gray-400">Monto a Pagar: {""}
        <span className="text-black">{cotizacion}</span>
      </p>
    </div>
  )
}
