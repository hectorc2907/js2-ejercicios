let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a imprimir"));

while(cantidad>50){
    cantidad = parseInt(prompt("La cantidad maxima es 50, reingrese el valor"));
}

for(let contador = 1; contador<=cantidad; contador++){
    let valor = "";
    for(let imprimir = 1; imprimir<=contador; imprimir++){
        valor = valor + imprimir;
    }
    document.write(valor);
    document.write("<br>");
}