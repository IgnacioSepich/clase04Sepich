let importeFinalCompra = Number(prompt("Ingrese el importe final de su compra"));
let cantidadDeCuotas = Number(prompt("Ingrese la cantidad de cuotas que desea abonar"));
let valorDeCuota;

if (cantidadDeCuotas <= 12){
    valorDeCuota = importeFinalCompra / cantidadDeCuotas 
} else {
    while (cantidadDeCuotas <= 0 || cantidadDeCuotas > 12 ){
        cantidadDeCuotas = Number(prompt("La cantidad de cuotas es invalida, ingrese nuevamente el valor"))
    }
    valorDeCuota = importeFinalCompra / cantidadDeCuotas 
}

alert(
    "Su compra se realizo con exito: \n" +
        importeFinalCompra + " es el valor total de su compra \n" +
        cantidadDeCuotas + " son las cuotas a pagar \n" +
        valorDeCuota + " es el valor de cada cuota "  
);