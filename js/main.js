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
let agregarAlCarrito = document.getElementById("agregar");
agregarAlCarrito.addEventListener('click', handleClick);
function handleClick() {
  alert('Gracias por agregar este producto al carrito. ¡Siga con su compra!');
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
const mensaje = document.getElementById ("mensaje");
mensaje.onkeyup = () => {
  console.log("Usted escribió " + mensaje.value)
}
let enviarMensaje = document.getElementById ("enviarMensaje")
enviarMensaje.addEventListener ('click', formulario); 
function formulario () {
  alert ('Gracias por mandar sus datos. Verifique que sean los correctos.')
  alert ('Nombre: ' + nombre.value)
  alert ('Apellido: ' + apellido.value)
  alert ('Email: ' + email.value)
}
