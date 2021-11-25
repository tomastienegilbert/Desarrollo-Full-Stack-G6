//Desafío 1 - Item 1

//Solicitud a usuario de 5 números

//solicitud primet dato
do {
    var num1 = prompt("Ingrese primer número");
} while (isNaN(num1));

//solicitud segundo dato
do {
    var num2 = prompt("Ingrese segundo número");
} while (isNaN(num2));

//solicitud tercer dato
do {
    var num3 = prompt("Ingrese tercer número");
} while (isNaN(num3));

//soliciud cuarto dato
do {
    var num4 = prompt("Ingrese cuarto número");
} while (isNaN(num4));

//solicitud quinto dato
do {
    var num5 = prompt("Ingrese quinto número");
} while (isNaN(num5));

//Operaciones con cantidad de dpias ingresada por usuario
//Suma de todos los números(s)
document.write("La suma de todos los números es: ");
document.write(parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5));
document.write("<br>");
//Promedio de todos los números(s)
document.write("El promedio de todos los números es: ");
document.write((parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)) / 5);