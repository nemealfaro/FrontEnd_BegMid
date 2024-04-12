// 1. Tipos de datos
// 2. Arreglos
// 3. Objetos
// 4. Ciclos
// 5. Condicionales
// 6. Funciones

console.log("Funcionando")

var nombre = "Nemesis"
console.log(nombre)

var perro = "Rayito"
console.log(perro)

var gato = "Minino"
console.log(gato)

var cerveza = "Sol"
console.log(cerveza)

//alert(nombre)

function Sumar() {
    alert("Funcionando")
}


//Arreglos [ ]
var mascotas = ["Perro","Gato","Conejo","Ballena"]

console.log(mascotas[3]) //Imprime unicamente el animal en posicion 3
console.log(mascotas) //Imprime todo el array

//Objetos con caracteristicas {}
var celular = {
    marca: "Iphone", 
    color: "Negro",
    camaras: 2,
    pantalla: 1
}

console.log(celular) //Imprime todas las caracteristicas del objeto
console.log(celular.marca) //Imprime unicamente la caracteristica mencionada
console.log(celular.color)

//Practica
//Crear una variable texto y numerica e imprimir en consola
//Crear una array de 7 frutas mostrando la primera y la ultima
//Crear objeto persona 5 caracteristicas, mostrar todas y luego 1


var mariposa = "morpho"
console.log(mariposa)

var cant_pantallas = 4
console.log(cant_pantallas)

var frutas = ["Mango","Cereza","Pipa","Mandarina","Uva","Melón","Papaya"]
console.log(frutas[0])
console.log(frutas[6])

var persona = {
    nombre: "Neme",
    piel: "Rosada",
    edad: 25,
    altura: 1.61,
    profesion: "Ing Sistemas"
}
console.log(persona)
console.log(persona.nombre)

//Fin Practica

//Formas de Concatenar

var nombre = "Nemesis"
// Primera forma
console.log("Mi nombre es " +nombre)
//Segunda forma 
console.log("El estudiante " + nombre + " es bueno en Javascript") 
console.log("El estudiante" ,nombre, "es bueno en Javascript") // Segunda forma, si coloca , da mas espacio
//Tercera forma
console.log(`El estudiante va a usar backticks ${nombre} al estudiante le gusto o no le gusto esta opcion `)

// Ciclos

var mascotas = ["Gato","Perro","Tortuga","Conejo"] //Array
console.log(mascotas[0])
console.log(mascotas[3])

//Ciclos For & Foreach & While & Do While

// Reemplazar la palabra array con el arreglo que hemos creado

mascotas.forEach(element => {
    //Aqui se pone el codigo
    console.log(element)
});

var estudiantes = ["Neme","Juan","Alexandra","Jas","Laura","Vanessa"]

estudiantes.forEach(element => {
    console.log(element)
});

// Obtener el div que esta en html mediante el Id que tiene en html
var midiv = document.getElementById("clientes")

// Ingresamos al HTML info al div clientes
midiv.innerHTML = "Hola Mundo"

//Obtenemos el div de html
var divVLA = document.getElementById("VLA")
//Ingresamos info al div
divVLA.innerHTML = "Academia de tecnologia"
//Creamos un array
var cursos = ["Cisco"," Base de Datos", " FrontEnd"]
//Imprimimos todo el contenido del array
cursos.forEach(element => {
    console.log(element)
});

var lista = document.getElementById("lista")

cursos.forEach(element => {
    //Imprime todo el array en html 
    lista.innerHTML += element 
});

// Practica ciclo foreach

// Caso # 1
var frutas = ["Manzana","Banano","Uchuva","Uva","Papaya","Melon","Sandia","Kiwi","Mandarina","Guanaba"]

frutas.forEach(element => {
    console.log(element)
});

//Caso #2
var personas = ["Neme","Juan","Jas","Laura","Vane","Danny","Ema","Esau","Coco","Ronald","Francisca","Natasha","Kristal","Sugeilyn","Alexandra"]

personas.forEach(element => {
    console.log(element)
});

//Caso #3
var animales = ["Perro"," Gato"," Foca"," Tortuga"," Ballena"," Panda"," Jirafa"," Mamut"," Koala"," Cabra"," Rana"," Delfin"," Calamar"," Pulpo"]

animales.forEach(element => {
    console.log(element)
});
//obtenemos el div de html
var mostrar = document.getElementById("mostrar")
//llenamos el div 
animales.forEach(element => {
    mostrar.innerHTML += element
});

//Caso #4
var videojuegos = ["CallofDuty"," JustDance"," MortalKombat"," Zombies"," Cars"]

videojuegos.forEach(element => {
    console.log(element)
});

var juegos =  document.getElementById("juegos")

videojuegos.forEach(element => {
    juegos.innerHTML += element

    //var juegos =  document.getElementById("juegos").innerHTML += element //esta opcion es todo en una linea
});

// Fin Practica