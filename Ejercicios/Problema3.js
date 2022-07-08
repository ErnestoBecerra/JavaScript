console.log( "PROGRAMA 3" );
let expresion = '';
let i = 0;
function alternarCadena(expre){
    let resultado = '';
    for(i = 0; i< expre.length; i++){
        if(i % 2 == 0){
            resultado += expre[i].toUpperCase();
        }else{
            resultado += expre[i].toLowerCase();
        }
    }
    return resultado;
}

expresion = prompt("Ingrese una expresion: ", "");
console.log(alternarCadena(expresion));