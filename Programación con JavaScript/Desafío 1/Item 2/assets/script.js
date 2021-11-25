//Desafío 1 - Item 1

//Solicitud a usuario de dato de primer número mayor a 0
do {
    var num1 = prompt("Ingrese un número mayor a 0");
} while (num1 <= 0 || isNaN(num1));

//Exigir que el ingreso de dato segundo número sea diferente al primero y mayor a 0

do {
    var num2 = prompt("Ingrese un número mayor a 0 y diferente al primero");
} while (num2 <= 0 || num2 === num1 || isNaN(num2));

//Operaciones con ambos números
//Suma
document.write("La suma es: ");
document.write(parseInt(num1) + parseInt(num2));
document.write("<br>");
//Resta
document.write("La resta es: ");
document.write(parseInt(num1) - parseInt(num2));
document.write("<br>");
//Multiplicación
document.write("La multiplicación es: ");
document.write(parseInt(num1) * parseInt(num2));
document.write("<br>");
//División
document.write("La división es: ");
document.write(parseInt(num1) / parseInt(num2));
document.write("<br>");
//Modulo
document.write("El módulo es: ");
document.write(parseInt(num1) % parseInt(num2));