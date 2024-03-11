import { useCotizador } from "../hooks/useCotizador"


export const Error = () => {

  const { error } = useCotizador()

  return (
    <p
      className="text-lg uppercase font-bold bg-red-700 text-white py-3 rounded text-center"
    >
      {error}
    </p>
  )
}
