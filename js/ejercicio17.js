const frase = prompt("Ingrese un texto");
const vocales = ["a", "e", "i", "o", "u"];

let lugar = 0;

for (let contador = 0; contador < frase.length; contador++) {
    const letra = frase[contador].toLowerCase();
    if (vocales.includes(letra)) {
        lugar = contador;
        break;
    }
}

document.write("La primera vocal esta en la posicion: ",lugar+1);