
// ANCHOR ---> Copia por valor vs copia por referencia

let a = 1
let b = a

console.log(b)

a += 1

console.log(b)


let auto = {
    modelo: 2021,
    color: "rojo"
}

let copiaAuto = auto

console.log(copiaAuto)

auto.color = "blanco"
auto.marca = "audi"

console.log(copiaAuto)

copiaAuto.puertas = 4

console.log(auto)


// array

let numeros = [ 12, 15, 21 ]

let copiaNumeros = numeros

console.log(copiaNumeros)

numeros.push(200)

console.log(copiaNumeros)

copiaNumeros.push("hola")

console.log(numeros)


// spread en objetos 

let mascota = {
    nombre: "jack",
    color: "blanco",
    edad: 3
}

let copiaMascota = {...mascota}

console.log(copiaMascota)
mascota.nombre = "juan"
console.log(copiaMascota)
copiaMascota.edad = 6
console.log(mascota)
console.log(copiaMascota)

// let producto = {
    //     precio: 2,
    //     title: "soy un producto"
    // }
    
    // let produictoParaElCarrito = {...producto, cantidad: 3 }
    

// spread en arreglos 

let numerosDeLaSuerte = [ 15, 12, 2, 23 ]

let copiaSuerte = [...numerosDeLaSuerte]

numerosDeLaSuerte.push(1)

console.log(copiaSuerte)
