console.log( "Programa 4" );
let cadena = '';
let aux = '';
let i;
function alternateArray(auxi){
    let ewe = '';
    for(i=0; i<aux.length; i++){
        if(i % 2 == 0){
            ewe += auxi[i].toUpperCase();
        }else{
            ewe += auxi[i].toLowerCase();
        }
    }
    return ewe;
}

cadena = prompt("Ingrese una cadena: " ,"");
aux = cadena.split(' ');
console.log(alternateArray(aux).split(' '));


