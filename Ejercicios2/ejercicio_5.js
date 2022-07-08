const personas=[
    {nombre: "Eduardo", edad:5, coloresFavoritos:["rojo","azul","verde"]},
    {nombre: "Jorge", edad:1, coloresFavoritos:["morado"]},
    {nombre: "Ana", edad:4, coloresFavoritos:["rojo","purpura"]},
    {nombre: "Miguel", edad:18, coloresFavoritos:["amarillo","turquesa","negro"]},
];


personas.sort((a,b) =>{
    if(a.coloresFavoritos.length < b.coloresFavoritos.length){
        return -1;
    }
    if(a.coloresFavoritos.length > b.coloresFavoritos.length){
        return 1;
    }
    return 0;
});
    


console.log(personas);