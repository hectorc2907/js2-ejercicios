let frase = prompt("Ingrese una frase");
frase = frase.toLowerCase();
let cantidad = 0;
for (let contador = 0; contador < frase.length; contador++) {
    const letras = frase.charAt(contador);
    if("aeiou".includes(letras)){
        cantidad++;
    }
}

document.write("La cantidad de vocales en su frase es de : ",cantidad);