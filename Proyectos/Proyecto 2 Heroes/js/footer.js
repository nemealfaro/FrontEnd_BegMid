//Variables
let mensaje = "Derechos Reservados"

//Da la indicacion de que apenas abra pagina cargue directamente la funcion es mas elegante que usar Footer()
window.onload = function(){
    //Llamado de la funcion
    Footer(mensaje,100)
};

function Footer(variable1, variable2) {
    //Capturar el id de html
    let divfooter = document.getElementById("divFooter")
    //Ingresar html a ese div desde JS
    let contenidoHtml

    contenidoHtml = `
    <footer class="footer fixed-bottom bg-dark text-white text-center ">
      <div class="container">
      ${variable2}
        <p>&copy; ${variable1}</p>
      </div>
    </footer>
    `
    divfooter.innerHTML += contenidoHtml
}
