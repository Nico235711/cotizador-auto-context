import { useCotizador } from "../hooks/useCotizador"
import { Cotizacion } from "./Cotizacion"
import { Formulario } from "./Formulario"
import { Spinner } from "./Spinner"

export const AppSeguro = () => {

  const { cotizacion, cargando } = useCotizador()

  return (
    <>
      <header className="my-10">
        <h1
          className="text-white text-center text-4xl font-black"
        >Cotizador de Seguros de Autos
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 rounded-lg shadow mx-auto p-10 mb-3">
        <Formulario />

        {
          cargando ? <Spinner /> : <Cotizacion />
        }
      </main>
    </>
  )
}
