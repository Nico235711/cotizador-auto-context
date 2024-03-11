
export function obtenerDiffYear(year) {
  return new Date().getFullYear() - year
}

export function cotizarMarca(id) {

  let incremento;

  switch (id) {
    case "1":
      incremento = 1.3
      break;
    case "2":
      incremento = 1.15
      break;
    case "3":
      incremento = 1.05
      break;
  }
  return incremento
}

export function cotizarPlan(id) {
  return id === "1" ? 1.2 : 1.5
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS"
  })
}