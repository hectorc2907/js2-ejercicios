let cadenaTexto = "";

do {
    let texto = prompt("Ingrese la frase");
    cadenaTexto = cadenaTexto + " - " + texto;
} while (confirm("Desea continuar ingresando frases?")==true);

document.write(cadenaTexto);