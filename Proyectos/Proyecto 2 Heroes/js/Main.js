console.log("Funcionando archivo main")

let ListaHeroes = [
    {
        nombre: "Spider-man",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum expedita commodi rerum aliquam perferendis nihil minima saepe sit fugit, tempore laborum laudantium ipsa omnis accusamus nisi numquam possimus eos quas.",
        img: "assets/Img/spiderman.png",
        fecha: "01/01/1990",
        universo: "Marvel"

    },
    {
        nombre: "Aquaman",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum expedita commodi rerum aliquam perferendis nihil minima saepe sit fugit, tempore laborum laudantium ipsa omnis accusamus nisi numquam possimus eos quas.",
        img: "assets/Img/aquaman.png",
        fecha: "01/01/1998",
        universo: "DC"

    }
    ,
    {
        nombre: "Hulk",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum expedita commodi rerum aliquam perferendis nihil minima saepe sit fugit, tempore laborum laudantium ipsa omnis accusamus nisi numquam possimus eos quas.",
        img: "assets/Img/hulk.png",
        fecha: "01/01/2000",
        universo: "Marvel"

    }
    ,
    {
        nombre: "Batman",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum expedita commodi rerum aliquam perferendis nihil minima saepe sit fugit, tempore laborum laudantium ipsa omnis accusamus nisi numquam possimus eos quas.",
        img: "assets/Img/batman.png",
        fecha: "01/01/2000",
        universo: "DC"

    }
]

console.log(ListaHeroes)
console.log(ListaHeroes[0])

let midiv3 = document.getElementById("divHeroes")
console.log(midiv3)
midiv3.innerHTML += JSON.stringify(ListaHeroes) //Visualizar el Objeto a Texto

//Elemento HTML

let divgato = document.getElementById("divgato")

//Ejemplo de contenido de html en una variable JS y visualizada en html
//Contenido
var Contenido

Contenido += 
`
<h3>Titulo</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus eum incidunt consectetur eos quaerat fugit repellendus quod omnis consequuntur qui dolor saepe totam, asperiores quasi iure exercitationem esse nostrum.</p>
`
divgato.innerHTML = Contenido