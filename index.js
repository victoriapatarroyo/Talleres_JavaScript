const prompt = require("prompt-sync")();

let numero = prompt("Escribe un número: ");
console.log(numero);

let miVariable;
miVariable = "Vicky";
console.log(miVariable);

let number = 5;
console.log(number);
console.log("Hola, " + miVariable)

let operacion = number * 3;
console.log(operacion);
let a;
let b = null;
console.log(a);
console.log(b);

let edad = 10;
if (edad >= 18){
    console.log("Es mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// FOR
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// Alcance global - muy manipulable
var x = 10;
if (true) {
    var x = 20;
    console.log(x);
}
console.log(x);

// Alcance local - nada manipulable
let y = 10;
if (true) {
    let y = 20;
    console.log(y);
}
console.log(y);

console.log(5 == "5");
console.log(5 === "5");