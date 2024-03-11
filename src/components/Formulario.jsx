import { Fragment } from "react"
import { marcas, planes, years } from "../constants"
import { useCotizador } from "../hooks/useCotizador"
import { Error } from "./Error"

export const Formulario = () => {

  const {
    datos,
    handleChangeData,
    error,
    setError,
    cotizarSeguro
  } = useCotizador()

  // validar formulario
  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(datos).includes("")) {
      setError("Todos los campos son obligatorios")
      return
    }

    setError("")

    // cotizar seguro
    cotizarSeguro()
  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        {
          error && <Error />
        }
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block font-black text-gray-600 uppercase mb-3">
              Marca
          </label>

          <select
            name="marca"
            id="marca"
            className="w-full p-3 border-2 rounded outline-none appearance-none"
            onChange={handleChangeData}
            value={datos.marca}
          >
            <option value="">-- Seleccione Marca --</option>
            {
              marcas?.map(marca => (
                <option value={marca.id} key={marca.id}>{marca.nombre}</option>
              ))
            }
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor="year"
            className="block font-black text-gray-600 uppercase mb-3">
              Año
          </label>

          <select
            name="year"
            id="year"
            className="w-full p-3 border-2 rounded outline-none appearance-none"
            onChange={handleChangeData}
            value={datos.year}
          >
            <option value="">-- Seleccione el Año del Auto --</option>
            {
              years?.map(year => (
                <option value={year} key={year}>{year}</option>
              ))
            }
          </select>
        </div>

        <div className="my-5">
          <label className="block font-black text-gray-600 uppercase mb-3">Plan</label>
          <div className="flex gap-3">
            {
              planes?.map(plan => (
                <Fragment key={plan.id}>
                  <label htmlFor={plan.id}>{plan.nombre}</label>
                  <input
                    type="radio"
                    name="plan"
                    id={plan.id}
                    value={plan.id}
                    onChange={handleChangeData}
                  />
                </Fragment>
              ))
            }
          </div>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-700 text-2xl uppercase text-white hover:bg-indigo-800 transition-all cursor-pointer py-3 font-bold"
        />
      </form>
    </>
  )
}
