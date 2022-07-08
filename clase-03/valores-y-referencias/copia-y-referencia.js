function elevarAlCuadrado(A){
    for(let i=0; i<A.length; i++ ){
        A[i] = A[i] * A[i];
    }
}

function elevarAlCuadradoSinModificar(A){
    let copia=[...A]; //Spread operator
    for(let i=0; i<copia.length; i++ ){
        copia[i] = copia[i] * copia[i];
       }
}


let nums =[1, 2, 3, 4, 5, 6, 7];
console.log('Originales')
console.log(nums);
elevarAlCuadrado(nums); //Estamos haciendo una modificacion al valor original
elevarAlCuadrado([...nums]); //Spread operator
elevarAlCuadradoSinModificar(nums);
console.log('Cuadrados');
console.log(nums);


