console.log("Archivo Fetch funcionando")

function LlamarAPI() {
    console.log("Llamando a la funcion")
    //Llamar al API 
        //Pasos
        // 1- Se coloca Fetch con el API
        //2- Se usa Then para poner la variable data en formato JSON
        //3- Se usa then para mostrar en consola la data 
    fetch("https://jsonplaceholder.typicode.com/users/") 
    .then(data=> data.json()) 
    .then(data=>{
        console.log(data)
        CrearTabla(data )
    }) 
}
LlamarAPI()

function CrearTabla(Datos) {
    //Llamar a la tabla por ID y agregar el template mas contenido
    let tablahtml = document.getElementById("tabla-html")
    let contenidohtml

    //Reemplazar Datos.Propiedad que queremos mostrar 
    // Iteramos sobre el array de objetos
    Datos.forEach(element => {
    contenidohtml = 
    `
    <tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
  </tr>
    `
    //Insertar el template en el DIV
    tablahtml.innerHTML += contenidohtml
    });

   
}