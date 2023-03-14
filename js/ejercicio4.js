let suma = 0;
while(confirm("Cancelar para finalizar")!=false){
    let numero = parseInt(prompt("Ingrese un valor numerico"));
    if(typeof(numero)=='number'){
        suma = suma + numero
    }else{
        alert("El dato ingresado no es un numero");
    }
}

document.write("La suma total es " + suma);