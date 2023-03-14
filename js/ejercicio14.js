let frase = prompt("Ingrese una frase");
frase = frase.split("");
let newFrase = "";

for(let contador = 0; contador<frase.length; contador++){
    newFrase += `${frase[contador]}-`;
}

document.write(newFrase);