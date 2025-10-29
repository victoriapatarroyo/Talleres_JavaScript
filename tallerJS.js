// Variables y tipo de datos
console.log("Variables y tipos de datos");
// Ejercicio 1
console.log("Ejercicio 1");
let nombre = "Victoria";
let edad = 48;
let esEstudiante = true;

// Ejercicio 2
console.log("Ejercicio 2");
let sinValor;
let valorNulo = null;

console.log(sinValor);
console.log(valorNulo);


// Ingreso de datos por teclado
console.log("Ingreso de datos por teclado");
console.log("Ejercicio 1");
// Ejercicio 1

const prompt = require("prompt-sync")();
let anioNacimiento = prompt("Escribe tu año de nacimiento: ");
let edadUsuario = 2025 - anioNacimiento;
console.log("Tu edad es " + edadUsuario);

// Ejercicio 2
console.log("Ejercicio 2");
let numero1 = parseInt(prompt("Ingresa un primer número: "));
let numero2 = parseInt(prompt("Ingresa un segundo número: "));
let suma = numero1 + numero2;
console.log("La suma es: " + suma);


// Condicional if
console.log("Condicional if");
console.log("Ejercicio 1");
// Ejercicio 1
let edadMayorEdad = parseInt(prompt("Ingresa tu edad: "));
if(edadMayorEdad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}

// Ejercicio 2
console.log("Ejercicio 2");
let estadoNumero = parseInt(prompt("Ingresa un número: "));
if(estadoNumero > 0) {
    console.log("Es positivo");
} else if(estadoNumero <0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}
    

// Bucle while
console.log("Bucle while");
// Ejercicio 1
console.log("Ejercicio 1");
let numeroWhile = parseInt(prompt("Ingresa un número: "))
let i = 1;

while(i <= numeroWhile) {
    console.log(i);
    i++;
}

// Ejercicio 2
console.log("Ejercicio 2");
let contrasenia = prompt("Ingresa la contraseña: ");
let contraseniaReal = "1234";

while(contrasenia != contraseniaReal) {
    console.log("Contraseña errada.  Sigue intentado");
    let contrasenia = prompt("Ingresa la contraseña: ");

    if(contrasenia == contraseniaReal) {
        console.log("Acertaste!!!");
        break;
    }
}


// Bucle for
console.log("Bucle for");
// Ejercicio 1
console.log("Ejercicio 1");
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ejercicio 2
console.log("Ejercicio 2");
let numeroMultiplicar = parseInt(prompt("Ingresa un número: "));

for (i = 1; i <= 10; i++) {
    console.log(numeroMultiplicar + " * " + i + " = " + numeroMultiplicar * i);
}