
// map - filter - find - some - reduce

let numeros = [13, 21, 7]

// devuelve un nuevo array , de la misma longitud que el original

let numerosMapeados = numeros.map( ( elemento )=>{
    return elemento * 2
})

console.log(numerosMapeados)


// filter 

const productos = [
    {
        id: 1,
        name: "celular",
        precio: 200,
        cantidad: 4
    },
    {
        id: 2,
        name: "tablet",
        precio: 400,
        cantidad: 5
    },
    {
        id: 3,
        name: "notebook",
        precio: 500,
        cantidad: 1
    },
    {
        id: 4,
        name: "macbook",
        precio: 900,
        cantidad: 3
    }
]

// SIEMPRE DEVUELVE UN NUEVO ARREGLO -- no necesariamente de la misma longitud

const productosFiltador = productos.filter( (elemento)=>{ 
    return elemento.precio < 450
 } ) 

 console.log(productosFiltador)

// find 


let productSelected = productos.find( (elemento, indice)=>{
    return elemento.id === 3
} )

console.log(productSelected)

let existe = productos.some( (elemento)=> {
    return elemento.name === "macbook"
})

console.log(existe)




console.log(total)

let total = productos.reduce( ( acc, elemento )=>{
    return acc + (elemento.precio * elemento.cantidad)
}, 0)