class Prendas {
  constructor(item, nombre, precio) {
    this.item = item;
    this.nombre = nombre;
    this.precio = precio;
  }
}
const prendas = [
  (prenda = new Prendas(1, "Remera", 5000)),
  (prenda = new Prendas(2, "Pantalon", 4000)),
  (prenda = new Prendas(3, "Campera", 20000)),
  (prenda = new Prendas(4, "Zapatillas", 30000)),
];
localStorage.setItem(
  "Bienvenida",
  "¡Hola usuario, gracias por visitar la pagina!"
);
function precioFinal(prenda1, prenda2, prenda3, prenda4) {
  let ingresarPrenda = prompt(
    "Ingresar el nombre de su prenda (Remera, pantalon, campera, zapatillas) para saber el valor de la misma"
  );
  if (ingresarPrenda == "Remera") {
    // let precio = prendaRemera.precio;
    const buscar = prendas.find((item) => item.nombre === "Remera");
    console.log(buscar);
    // console.log("El valor de la remera es de $5000");
  } else if (ingresarPrenda == "Pantalon") {
    const buscar = prendas.find((item) => item.nombre === "Pantalon");
    console.log(buscar);
    // console.log("El valor del pantalon es de $4000");
  } else if (ingresarPrenda == "Campera") {
    const buscar = prendas.find((item) => item.nombre === "Campera");
    console.log(buscar);
  } else {
    const buscar = prendas.find((item) => item.nombre === "Zapatillas");
    console.log(buscar);
  }
  let mostrarPrendas = prompt(
    "¿Quiere tener un listado de todas las prendas con su respectivo precio? Ponga debajo 'Si'"
  );
  if ((mostrarPrendas = "Si")) {
    console.log(prendas);
  }
  let resultado = 4000 + 5000 + 20000 + 30000;
  let pregunta = prompt(
    "¿Desea ver el precio final de todas las prendas que tenemos en stock? Ponga debajo 'Si'"
  );
  if ((pregunta = "Si")) {
    console.log("La suma final de todas las prendas es de $" + resultado);
  }
}
precioFinal();
const enJSON = JSON.stringify(prendas);
console.log(enJSON);
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
guardarLocal ("prendas", JSON.stringify (prendas))
let agregarAlCarrito = document.getElementById("agregar");
agregarAlCarrito.addEventListener("click", handleClick);
function newFunction() {
  const enJSON = '{"id":2, "producto": "arroz"}';
  const producto1 = JSON.parse(enJSON);
  console.log(typeof enJSON);
  console.log(typeof producto1);
  console.log(producto1.producto);
  return enJSON;
}
function handleClick() {
  alert("Gracias por agregar este producto al carrito. ¡Siga con su compra!");
}
const nombre = document.getElementById("nombre");
nombre.onkeyup = () => {
  console.log("Tu nombre es " + nombre.value);
};
const apellido = document.getElementById("apellido");
apellido.onkeyup = () => {
  console.log("Tu apellido es " + apellido.value);
};
const email = document.getElementById("email");
email.onkeyup = () => {
  console.log("Tu email es " + email.value);
};
const mensaje = document.getElementById("mensaje");
mensaje.onkeyup = () => {
  console.log("Usted escribió " + mensaje.value);
};
let enviarMensaje = document.getElementById("enviarMensaje");
enviarMensaje.addEventListener("click", formulario);
function formulario() {
  alert("Gracias por mandar sus datos. Verifique que sean los correctos.");
  alert("Nombre: " + nombre.value);
  alert("Apellido: " + apellido.value);
  alert("Email: " + email.value);
}
