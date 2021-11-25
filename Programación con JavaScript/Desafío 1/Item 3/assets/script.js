//Desafío 1 - Item 1

//Solicitud a usuario de temperatura
do {
    var num1 = prompt("temperatura en Grados Celcius");
} while (isNaN(num1));
//Operaciones con temperatura ingresada por usuario
//Celcius a Kelvin
document.write("La temperatura en Kelvin es: ");
document.write(parseInt(num1) + 273.15);
document.write("<br>");
//celcius a Farenheit
document.write("La temperatura en farenheit: ");
document.write(parseInt(num1) * 1.8 + 32);
document.write("<br>");