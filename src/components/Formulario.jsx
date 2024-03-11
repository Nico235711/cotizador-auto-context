import { Fragment } from "react"
import { marcas, planes, years } from "../constants"

export const Formulario = () => {

  return (
    <>
      
      <form>
        <div className="my-5">
          <label htmlFor="marca" className="block font-black text-gray-600 uppercase mb-3">Marca</label>

          <select name="marca" id="marca" className="w-full p-3 border-2 rounded outline-none appearance-none">
            <option value="">-- Seleccione Marca --</option>
            {
              marcas?.map(marca => (
                <option value={marca.nombre} key={marca.id}>{marca.nombre}</option>
              ))
            }
          </select>
        </div>

        <div className="my-5">
          <label htmlFor="year" className="block font-black text-gray-600 uppercase mb-3">Año</label>

          <select name="year" id="year" className="w-full p-3 border-2 rounded outline-none appearance-none">
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
                  <label htmlFor={plan.nombre}>{plan.nombre}</label>
                  <input type="radio" name="plan" id={plan.nombre} value={plan.nombre} />
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
