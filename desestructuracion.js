 
// ANCHOR ---> objetos 

let persona = { 
    nombre: "juancito",
    edad: 22,
    esCasado: true
}

console.log( persona.nombre )
console.log( persona.edad )
console.log( persona.esCasado )

console.log( persona["nombre"] )
console.log( persona["edad"] )
console.log( persona["esCasado"] )

// NO IMPORTA EL ORDEN - PERO SI IMPORTA EL NOMBRE
let { edad, esCasado, nombre } = persona

console.log( nombre )
console.log( edad )
console.log( esCasado )

const mostrarPropiedad = ( prop )=>{

    console.log( persona[prop] )

}
mostrarPropiedad("nombre")

// ANCHOR ---> array
console.log("-----------")
console.log("-----------")
console.log("-----------")
let personas = [ "pepito" , "maria" , "marta" ]

// console.log( personas[0] )
// console.log( personas[1] )
// console.log( personas[2] )

let [ , , u3 ] = personas

// console.log( u1 )
// console.log( u2 )
console.log( u3 )