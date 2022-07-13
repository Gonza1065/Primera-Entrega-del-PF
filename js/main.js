class Prendas {
  constructor(item, nombre, precio) {
    this.item = item;
    this.nombre = nombre;
    this.precio = precio;
  }
}
let prendas = [
  (prendaRemera = new Prendas(1, "Remera", 5000)),
  (prendaPantalon = new Prendas(2, "Pantalon", 4000)),
  (prendaCampera = new Prendas(3, "Campera", 20000)),
  (prendaZapatilla = new Prendas(4, "Zapatillas", 30000)),
];
function precioFinal(prenda1, prenda2, prenda3, prenda4) {
  let ingresarPrenda = prompt(
    "Ingresar el nombre de su prenda (Remera, pantalon, campera, zapatillas) para saber el valor de la misma"
  );
  if (ingresarPrenda == "Remera") {
    // let precio = prendaRemera.precio;
    const buscar = prendas.find((item) => item.nombre === "Remera")
    console.log(buscar);
    // console.log("El valor de la remera es de $5000");
  } else if (ingresarPrenda == "Pantalon") {
    const buscar = prendas.find((item) => item.nombre === "Pantalon")
    console.log(buscar);
    // console.log("El valor del pantalon es de $4000");
  } else if (ingresarPrenda == "Campera") {
    const buscar = prendas.find((item) => item.nombre === "Campera")
    console.log(buscar);
  } else {
    const buscar = prendas.find((item) => item.nombre === "Zapatillas")
    console.log(buscar);
  }
  let mostrarPrendas = prompt ("¿Quiere tener un listado de todas las prendas con su respectivo precio? Ponga debajo 'Si'")
  if (mostrarPrendas = 'Si') {
    console.log(prendas)
  }
  let resultado = 4000 + 5000 + 20000 + 30000;
  let pregunta = prompt("¿Desea ver el precio final de todas las prendas que tenemos en stock? Ponga debajo 'Si'")
  if (pregunta = "Si") {
    console.log("La suma final de todas las prendas es de $" + resultado)
  }
}
precioFinal();


