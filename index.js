

const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
let cantidad = document.querySelector('.cantidad');
let total = document.querySelector('.valor-total');

let valorCantidad = 0;
cantidad.innerHTML = valorCantidad;

const precio = 400000;
let precioUnitario = document.querySelector('.precio-inicial');
precioUnitario.innerHTML = precio;

suma.onclick = function() {
    cantidad.innerHTML = `${++valorCantidad}`;
    total.innerHTML = `${valorCantidad * precio}`;
}

resta.onclick = function() {
    if (valorCantidad > 0) {
        valorCantidad--;
        cantidad.innerHTML = valorCantidad;
        total.innerHTML = valorCantidad * precio;
    }
};








