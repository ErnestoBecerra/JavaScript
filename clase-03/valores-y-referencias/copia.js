// Los tipos de datos primitivos(string,number,null,undefined)
// Siempre al usarlos como argumento van a ser una copia
function swap(a,b){
    let temp=a;
    a =b;
    b=temp;
}
let x=10;
let y=00;

console.log(x,y);
swap(x,y);
console.log(x,y);