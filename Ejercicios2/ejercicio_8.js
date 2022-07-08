const numeros = [1,2,3,4,5,6];
const result = [];
function agregarCadena(cadena){
    result.push(`Tienes la ficha` + cadena );
}

numeros.forEach((frase) => agregarCadena(frase));
console.log(result);