
function Insertar() {
    //.value obtiene lo que digite el usuario
    let vuserId = document.getElementById("userId").value
    let vtitle = document.getElementById("title").value
    let vbody = document.getElementById("body").value
    //debugger
    //name en hmtl y la variable de javascript
    let datos ={
        userId:vuserId,
        title:vtitle,
        body:vbody
    }
    //debugger
    //El API tiene paso adicional cuando se van a ingresar datos por medio de input
    //Se le indica el metodo de envio, como va a viajar el contenido(app de json) y 
    //En el body se le van a enviar todos los datos ubicados en el objeto datos mediante los datos json convert en string 
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(datos)
    })
    .then(data=>data.json())
    .then(data=>{
        //debugger
        console.log(data)
        alert("Registro insertado exitosamente")
    })
    .catch(error=>{
        console.error("Error al insertar")
        alert("Error al insertar")
    })
}

Insertar()