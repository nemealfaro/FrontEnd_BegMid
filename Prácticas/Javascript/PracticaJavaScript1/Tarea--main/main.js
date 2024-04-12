
var frutitas = ["Manzana"," Pera", " Papaya", " Guanabana"]

var divfrutas = document.getElementById("Frutas")

frutitas.forEach(element => {
    //MUESTRA CONSOLA
    console.log(elemet)
    //MUESTRA HTML  
    divfrutas.innerHTML += element
});

//Tipos de Variables
// let , var , const (no se puede cambiar se mantiene)

const perro1 = "Rayito"
var perro2 = "Manchas"
let perro3 = "Puchi"

console.log(perro1)
console.log(perro2)
console.log(perro3)

//perro1 = "RayitoVeloz" //Da error por que se intento cambiar el nombre a una variable const
perro2 = "Manchitas"
perro3 = "Puchito"

//console.log(perro1)
console.log(perro2)
console.log(perro3)


