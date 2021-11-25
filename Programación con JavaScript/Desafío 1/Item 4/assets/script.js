//Desafío 1 - Item 1

//Solicitud a usuario de dos números
do {
    var num1 = prompt("Cantidad de días");
} while (isNaN(num1));

//Operaciones con cantidad de díias ingresada por usuario

//Días a año(s)
document.write("La cantidad de días en años es: ");
document.write(parseInt(num1) / 365);
document.write("<br>");
//Días a Semana(s)
document.write("La cantidad de días en semanas es: ");
document.write(parseInt(num1) / 7);
document.write("<br>");
//Días a Día(s)
document.write("La cantidad de días es: ");
document.write(parseInt(num1) / 1);
document.write("<br>");
//Años, semanas y días
document.write("La cantidad de días ingresados es igual a " + Math.floor(parseInt(num1) / 365) + " años, " + Math.floor((parseInt(num1) % 365) / 7) + " semanas y " + Math.floor((parseInt(num1) % 365) % 7) + " días.");