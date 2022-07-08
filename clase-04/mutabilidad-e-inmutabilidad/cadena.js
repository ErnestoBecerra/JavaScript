//Para Javascript 

//Los tipos de datos primitivos (boolean, string, number, symbol, null, undefined)
//Son inmutables

//let num1 =10;
//let str1 = "Hola";
//let boolean1 = true;
//let copiaNum1 = num1;
//Para actualizar, tenemos que cambiar todo el contenido de la variable
//console.log(num1, str1, boolean1);
//num1 +=100;
//str1 += ',mundo'
//boolean1 = false;
//console.log(num1,str1,boolean1);

//let myStr = 'soy un ejemplo'
//console.log(myStr);
//myStr[0] = 'D'
//console.log(myStr);

//Los tipos de datos no primitivos (object(array,object,etc...))(referencias)
//son mutables
let arre = [1,2,3]
let obj = {a:10, b:20}

console.log(arre);
console.log(obj);

arre.push(4);
obj.c = '30';
console.log(arre);
console.log(obj);