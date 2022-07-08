creamos nuevo archivo=> metodo-sort.js

const numbers = [1,2,3,4,5,6,7,8,9,10];
//Definimos una función de comparación.
//En este caso, será para ordenar números

/**
*
*@param a primer valor a comparar
*@param b segundo valor a comparar
*@returns la fnción retorna -1 si a es menor que b. Retorna 1 si b es menor que a
*/

const compareFunction = (a,b) =>{
	if(a<b){
		return -1;
	}else{
		return 1;
	}
}

conole.log(numbers);
//conole.log(numbers.sort()); 
//conole.log(numbers.sort(compareFunction)); 
conole.log(numbers.sort((a,b) => a-b )); 
conole.log(numbers.sort((a,b) => -(a-b) )); 
conole.log(numbers);