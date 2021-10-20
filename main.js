//Objetos
const cuaderno = {
    color:"azul",
    marca:"Stanford",
    precio:"5",
    detalle:"doble reglon"
}
console.log(cuaderno);
console.log(cuaderno.marca);
console.log(cuaderno["color"]);
cuaderno.precio=10;
console.log(cuaderno);

//funtion
function Celular(marca, modelo, color, precio){
    this.marca = marca;
    this.modelo=modelo;
    this.color=color;
    this.precio=precio;
}

let celu1 = new Celular("Sansung", "A30", "Azul", "600");
console.log(celu1);

let miMarca = prompt("Ingresa la marca de tu celular");
let miModelo = prompt("Ingresa el modelo de tu celular");
let miColor = prompt("Ingresa el color de tu celular");
let miPrecio = prompt("Ingresa el precio de tu celular");

let miCelu = new Celular(miMarca,miModelo,miColor,miPrecio);
console.log("Tu Celu:" + miCelu.marca);
console.log(miCelu);
