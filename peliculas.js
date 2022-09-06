//variables

const peliculas = 
[{ id: 1, nombre: "Penny Serenade", año: 1941, con:"Cary Grant"},
{ id: 2, nombre: "Suspicion", año: 1940, con:"Joan Fontaine"},
{ id: 3, nombre: "Cat People", año: 1942, con:"Simone Simon" }]

let nombreUsuario = prompt("Bienvenido a CINETECA NOIR! Ingresa tu nombre por favor")
let peliculaElegida = parseInt(prompt(`${nombreUsuario}, cuál de nuestras películas quieres ver?\
\n 1_Penny Serenade (1941)
\n 2_Suspicion (1940)
\n 3_Cat People(1942)`))


function Mensaje(peliculaElegida) {
    let mensaje = alert(`${nombreUsuario}, has elegido ver: ${peliculas[peliculaElegida - 1].nombre}, del año${peliculas[peliculaElegida - 1].año}, 
    \n protagonizada por
     ${peliculas[peliculaElegida - 1].con}. Que la disfrutes!`)
    return mensaje
}

if(peliculaElegida >0 && peliculaElegida <4){
    Mensaje(peliculaElegida)
}else{alert(`${nombreUsuario},por favor elige una opción válida`)

}

