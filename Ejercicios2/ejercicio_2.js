/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let cadena = n.toString().split("")
    let producto = cadena.reduce((a,b)=>parseInt(a) * parseInt(b))
    let suma = cadena.reduce((a,b)=> parseInt(a) + parseInt(b))
    let equals = producto - suma
    return equals
};