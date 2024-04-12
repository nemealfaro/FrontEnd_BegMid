//Ejercicio 1

// let nombres = "Nemesis"
// let apellido = "Alfaro Perez"

// console.log(nombres)
// console.log(apellido)

//Ejercicio 2

// let nombress = prompt("Ingrese su Nombre: ")
// let apellidos = prompt("Ingrese su Apellido: ")

// alert("Bienvenid@: " +nombress + " " +apellidos)

//Ejercicio 3

// let num1 = Number (prompt("Ingrese el valor del num#1"))
// let num2 = Number (prompt("Ingrese el valor del num#2"))
// let resultado = num1 + num2

//alert("El resultado: " +resultado)

//Ejercicio 4

// let numero = Number (prompt("Ingrese el valor del numero"))
// let numerotriple = numero * 3

// console.log("El triple de este numero es: " +numerotriple)

//Ejercicio 5
// let texto = prompt("Ingresa un texto")
// const longitud = texto.length

// alert("El largo del texto ingresado es: " +longitud)

//Ejercicio 7 OPERADORES LOGICOS
// let valor1 = "Nem"
// let valor2 = "Cam"

// console.log( valor1 != valor2)

// let valor3 = 4
// let valor4 = "N"

// console.log(valor3 == valor4)

// let valor5 = 5
// let valor6 = Number("5")

// console.log(valor5 == valor6)

// let valor7 = 6
// let valor8 = '10'

// console.log(valor7 === valor8)

//Ejercicio 8

//var username = prompt("Ingrese el nombre: ")

// if (username.length != 0) {
//     alert("Bienvenido: " + username)
// } else {
//     var username2 = prompt("Favor ingresar su nombre: ")
//     alert("Bienvenido: " + username2)
// }

//Ejercicio 9

// var number = Number(prompt("Ingrese un numero"))

// if (number % 2 == 0 ) {
//     alert("Numero Par")
// } else {
//     alert("Numero Impar")
// }

//Ejercicio 10

const pelis = ["Sirenita","Bella y Bestia", "Cenicienta","Pocahontas"]
let opciones = ""

for (let i = 0; i < pelis.length; i++) {
    opciones += "\n" + (i + 1) + ". " + pelis[i].trim() + "\n";
}

let peliElegida = prompt("Ingrese su peli favorita: " + "\n" + opciones)