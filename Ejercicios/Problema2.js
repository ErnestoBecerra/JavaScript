console.log( "PROGRAMA 2" );
let newCorreo;
let newExtension;
let arreglo;

function reemplazarExtension(correo, extension){
        if(extension == '@yahoo.com'){
            console.log(correo.replace('@yahoo.com','@clobdw.com'));
        }
        if(extension == '@gmail.com'){
            console.log(correo.replace('@gmail.com','@clobdw.com'));
        }
        if(extension == '@outlook.com'){
            console.log(correo.replace('@outlook.com','@clobdw.com'));
        }
}

newCorreo = prompt("Introduzca un correo: ", " ");
newExtension = prompt("Introduzca la extension del correo: ", " ");
if((newCorreo.search(newExtension)) != -1){
    reemplazarExtension(newCorreo, newExtension);
}else{
    console.log("Programa terminado...");
}
