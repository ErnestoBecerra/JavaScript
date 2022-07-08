const array = [1,2,3,4,5,6];

function sumarElementos(nums){
    let res = nums.reduce((acumulador, numero) => acumulador + numero)
    return res;
}

console.log(sumarElementos(array));
