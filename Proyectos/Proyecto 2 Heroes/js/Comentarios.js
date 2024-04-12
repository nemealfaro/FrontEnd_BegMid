function LlamarAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(datos=>datos.json())
    .then(datos=>{
        console.log(datos)
        //Aca se llama la tabla despues de crear
        Tabla2(datos)
    })
}

LlamarAPI()

function Tabla2(datos) {
    let tabla2 = document.getElementById("tabla2")
    
    datos.forEach(element => {
        let contenidohtml = 
        `
        <tr>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
        </tr>
        `
        //Meta en el div table de html el contenido del API
        tabla2.innerHTML += contenidohtml
    });

}