// Declaracion de variables
// Nombre asignado por uno y dentro de (nombre ubicado en ID)
var vnombre = document.getElementById("vnombre") 
var vedad = document.getElementById("vedad")
var vrespuesta = document.getElementById("vrespuesta")

// Funcion es un bloque o un proceso
// Evento: Se muestra solo cuando algun proceso de html lo llame
function Mostrar() {
    //Inicio
    alert("Llamando a la funcion")
    // variable.value = Obtiene la info de un input o etiqueta html
    // variable.InnerHtml = Ingresa info al Html
    vnombre.value // Obtiene lo que el usuario digito en el input nombre
    alert("Su nombre es: " +vnombre.value) //Muestra ventana emergente con el nombre
    alert("Su edad es: " +vedad.value) //Muestra ventana emergente con la edad
    vrespuesta.innerHTML = "Llamando a la funcion" // Se ve en el div vrespuesta de html

    //Condicionales - IF ELSE
    //Permite tomar decisiones, queremos saber si la edad de mayor, menor
    if (vedad == 18) {
        alert("Puede ingresar al bar, bienvenido")
    }else{
        alert("No puede ingresar al bar, chao contigo")
    }


    //Fin
}

