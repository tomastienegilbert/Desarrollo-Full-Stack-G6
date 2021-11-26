//Solicitud de cantidad de partidas
do {
    var ingresoCantidadPartidas = prompt("Cuántas veces quieres jugar")
} while(isNaN(ingresoCantidadPartidas))

var cantidadPartidasSolicitadas = parseInt(ingresoCantidadPartidas)

//Partida
function partida() {
//Ingreso datos usuario
do{

//Bluf de computador
function bluffAleatorio() {
    var bluffDecision =  Math.floor(Math.random() * (3)) + 1;
        if (bluffDecision == 1) {
        return "piedra";
    } else if (bluffDecision == 2) {
        return "papel";
    } else {
        return "tijera";
      }
    }    

var bluffComputador = bluffAleatorio();
//Fin Bluff Computador

    var decisionUsuario = prompt("Elige piedra, papel o tijera. El computador dice que sacará " + bluffComputador);
}
while(decisionUsuario != "piedra" && decisionUsuario != "papel" && decisionUsuario != "tijera");

//seleccion aleatoria de programa
function aleatorio() {
    var numeroDecision =  Math.floor(Math.random() * (3)) + 1;
        if (numeroDecision == 1) {
        return "piedra";
    } else if (numeroDecision == 2) {
        return "papel";
    } else {
        return "tijera";
      }
    }
    
var decisionComputador = aleatorio();

//Comparación de selecciones
if (decisionUsuario == decisionComputador) {
alert("Empate, el computador seleccionó: "+decisionComputador);
} else if (decisionUsuario == "piedra" && decisionComputador == "tijera") {
alert("Ganaste, el computador seleccionó: "+decisionComputador);
} else if (decisionUsuario == "papel" && decisionComputador == "piedra") {
alert("Ganaste, el computador seleccionó: "+decisionComputador);
} else if (decisionUsuario == "tijera" && decisionComputador == "papel") {
alert("Ganaste, el computador seleccionó: "+decisionComputador);
} else {
alert("Perdiste, el computador sacó "+decisionComputador +". ¿Por qué creiste que el computador iba a sacar "+bluffComputador+"? ¡Erí terrible pollo!");
}
}
//Fin Partida

//Repetición según cantidad de partidas solicitadas
for(i=1; i<=cantidadPartidasSolicitadas; i++){
    partida();
}
    