const valores = [0, 1, "hello", '', false, null, undefined, true, [1,2,3]];
const arrayTruthy =[];

arrayTruthy.unshift(1);
arrayTruthy.unshift("hello");
arrayTruthy.unshift(true);
arrayTruthy.unshift([1,2,3]);

function valoresFalsy(valor, array){
    return valor.filter(elemento => array.indexOf(elemento) == -1);
}
const falsies = valoresFalsy(valores, arrayTruthy);
console.log(falsies);