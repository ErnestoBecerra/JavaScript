const valores = [0, 1, "hello", '', false, null, undefined, true, [1,2,3]];
const arrayFalsy =[];

arrayFalsy.unshift(0);
arrayFalsy.unshift('');
arrayFalsy.unshift(false);
arrayFalsy.unshift(null);
arrayFalsy.unshift(undefined);

function valoresTruthy(valor, array){
    return valor.filter(elemento => array.indexOf(elemento) == -1);
}
const truties = valoresTruthy(valores, arrayFalsy);
console.log(truties);