let nombre = "Nem Alfaro"
let edad = 17
//char
let estado = "A" 


//Programa que defina si la persona es mayor de edad 18
//=== sign igual | > sign mayor | > sign menor
//Metodo
function CalcularMayoEdad() {
    if (edad >= 18) {
        console.log(`${nombre} es mayor de edad`)
    } else {
        console.log(`${nombre} es menor de edad`)
    }
}

//Funcion
function Funcion_CalcularMayoEdad() {
    if (edad >= 18) {
       return `${nombre} es mayor de edad`;
    } else {
        return `${nombre} es menor de edad`;
    }
}

CalcularMayoEdad();
let respuesta = Funcion_CalcularMayoEdad();
console.log(respuesta) // o console.log(Funcion_CalcularMayoEdad())

// Suma + | Resta - | Div / | Multi *
function Suma(numero1, numero2) {
    let num1 = 22;
    let num2 = 22;

    let resul = num1 + num2;
    return resul;
}

console.log(Suma())
console.log(Suma(22,120))


let ArrayPersonas = ["Nem","Cam","Lau","Jas"]
console.log(ArrayPersonas)

//Funcion que valide si esta o no una persona
function ExistePersona(nombre) {
    let existe = false;
    //      Inicio            Parada          Aumenta
    for (let i = 0; i < ArrayPersonas.length; i++) {
        //console.log(ArrayPersonas[i])
        
        if (ArrayPersonas[i] === nombre) {
            existe = true;
        }
    }
    // ArrayPersonas.forEach(x => {
    //     console.log(x)
    // })
    return existe;
}

console.log(ExistePersona("Pedro"))

console.log("Probando cambios2")