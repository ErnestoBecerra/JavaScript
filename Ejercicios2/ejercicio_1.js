const personas=[
    {nombre: "Eduardo", edad:5, coloresFavoeitos:["rojo","azul","verde"]},
    {nombre: "Jorge", edad:1, coloresFavoeitos:["morado"]},
    {nombre: "Ana", edad:4, coloresFavoeitos:["rojo","purpura"]},
    {nombre: "Miguel", edad:18, coloresFavoritos:["amarillo","turquesa","negro"]},
];
let years;
let favoritos;
let tamName ;

function buscarPersona(year,favourite, name){
    let resultados = personas.filter((persona)=> persona.nombre.length < name && persona.edad >= years && persona.coloresFavoritos.length>=favourite);
}

years = prompt("Introduzca el minimo de edad:","");
favoritos = prompt("Introduzca numero de colores favoritos:","");
tamName = prompt("Introduzca el tamaño del nombre:","");

buscarPersona(years,favoritos,tamName);
console.log(resultados);
