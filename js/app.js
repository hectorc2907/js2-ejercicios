function ejercicio1() {
  let mensajePunto1 = document.getElementById("mensajePunto1");
  let edad = parseInt(prompt("Ingrese la Edad del Usuario: "));

  switch (true) {
    case edad <= 18 && edad !== 1 && edad > 0:
      mensajePunto1.textContent = `El usuario tiene ${edad} años no puede conducir`;
      break;
    case edad > 18:
      mensajePunto1.textContent = `El usuario tiene ${edad} años puede conducir`;
      break;
    case edad === 1:
      mensajePunto1.textContent = `El usuario tiene ${edad} año no puede conducir`;
      break;
    case edad <= 0:
      mensajePunto1.textContent = `Los numeros negativos y el 0 no son tomados en cuenta, pruebe una vez mas`;
      break;
    default:
      mensajePunto1.textContent = `La entrada no es valida, pruebe una vez mas`;
      break;
  }
}
let punto1 = document.getElementById("btnPunto1");
punto1.addEventListener("click", ejercicio1);

function ejercicio2() {
  let mensajePunto2 = document.getElementById("mensajePunto2");
  let calificacion = parseInt(prompt("Ingrese la calificación: "));

  switch (true) {
    case calificacion === 0 || calificacion === 1 || calificacion === 2:
      alert("Muy deficiente");
      break;
    case calificacion === 3 || calificacion === 4:
      alert("Insuficiente");
      break;
    case calificacion === 5 || calificacion === 6:
      alert("Suficiente");
      break;
    case calificacion === 7:
      alert("Bien");
      break;
    case calificacion === 8 || calificacion === 9:
      alert("Notable");
      break;
    case calificacion === 10:
      alert("Sobresaliente");
      break;
    case calificacion < 0 || calificacion > 10:
      mensajePunto2.textContent = `Número Erróneo`;
      break;
    default:
      mensajePunto2.textContent = `Introduce un número valido`;
      break;
  }
}
let punto2 = document.getElementById("btnPunto2");
punto2.addEventListener("click", ejercicio2);

function ejercicio3() {
  let mensajePunto3 = document.getElementById("mensajePunto3");
  let textoCompleto = "";

  do {
    let texto = prompt("Ingrese el texto: ");
    textoCompleto += texto + " - ";
    continuar = confirm("¿Desea Ingresar algo mas?");
  } while (continuar);

  textoCompleto = textoCompleto.slice(0, -3);
  textoCompleto += ".";
  mensajePunto3.textContent = `${textoCompleto}`;
}
let punto3 = document.getElementById("btnPunto3");
punto3.addEventListener("click", ejercicio3);

function ejercicio4() {
  let mensajePunto4 = document.getElementById("mensajePunto4");
  let sumaTotal = 0;

  do {
    let numero = parseInt(prompt("Ingrese el numero por favor"));
    if (numero) {
      sumaTotal = sumaTotal + numero;
      continuar = confirm("¿Desea continuar ingresando datos?");
    } else {
      alert("El dato ingresado no es un numero");
      continuar = true;
    }
  } while (continuar);
  mensajePunto4.textContent = `La suma total es ${sumaTotal}`;
}
let punto4 = document.getElementById("btnPunto4");
punto4.addEventListener("click", ejercicio4);

function ejercicio5() {
  let mensajePunto5 = document.getElementById("mensajePunto5");

  do {
    let numeroDNI = parseInt(prompt("Ingrese el Numero de DNI: "));
    if (numeroDNI >= 0 && numeroDNI <= 99999999) {
      let restante = numeroDNI % 23;
      switch (restante) {
        case 0:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra T`
          );
          break;
        case 1:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra R`
          );
          break;
        case 2:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra W`
          );
          break;
        case 3:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra A`
          );
          break;
        case 4:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra G`
          );
          break;
        case 5:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra M`
          );
          break;
        case 6:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra Y`
          );
          break;
        case 7:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra F`
          );
          break;
        case 8:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra P`
          );
          break;
        case 9:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra D`
          );
          break;
        case 10:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra X`
          );
          break;
        case 11:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra B`
          );
          break;
        case 12:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra N`
          );
          break;
        case 13:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra J`
          );
          break;
        case 14:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra Z`
          );
          break;
        case 15:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra S`
          );
          break;
        case 16:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra Q`
          );
          break;
        case 17:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra V`
          );
          break;
        case 18:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra H`
          );
          break;
        case 19:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra L`
          );
          break;
        case 20:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra C`
          );
          break;
        case 21:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra K`
          );
          break;
        case 22:
          alert(
            `El restante es ${restante} por lo que le corresponde la letra E`
          );
          break;
      }
      continuar = confirm("¿Desea ingresar otro DNI?");
    } else {
      alert("El dato ingresado no es valido, vuelva a probar");
      continuar = true;
    }
  } while (continuar);
  mensajePunto5.textContent = `Gracias por usar la función!!`;
}
let punto5 = document.getElementById("btnPunto5");
punto5.addEventListener("click", ejercicio5);

function ejercicio6() {
  let mensajePunto6 = document.getElementById("mensajePunto6");
  let piramide = "";

  for (let i = 1; i <= 30; i++) {
    for (let j = 1; j <= i; j++) {
      piramide += i;
    }
    piramide += "<br>";
  }
  mensajePunto6.innerHTML = piramide;
}
let punto6 = document.getElementById("btnPunto6");
punto6.addEventListener("click", ejercicio6);

function ejercicio7() {
  let mensajePunto7 = document.getElementById("mensajePunto7");
  let piramide = "";
  let cantidad = 0;
  let condicion = true;

  do {
    cantidad = parseInt(prompt("Ingrese el numero a calcular no mayor a 50"));
    if (cantidad > 0 && cantidad <= 50) {
      condicion = false;
    } else {
      alert("El numero ingresado es incorrecto vuelva a intentar");
      condicion = true;
    }
  } while (condicion);

  for (let i = cantidad; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      piramide += i;
    }
    piramide += "<br>";
  }
  mensajePunto7.innerHTML = piramide;
}
let punto7 = document.getElementById("btnPunto7");
punto7.addEventListener("click", ejercicio7);

function ejercicio8() {
  let mensajePunto8 = document.getElementById("mensajePunto8");
  let piramide = "";
  let cantidad = 0;
  let condicion = true;

  do {
    cantidad = parseInt(prompt("Ingrese el numero a calcular no mayor a 50"));
    if (cantidad > 0 && cantidad <= 50) {
      condicion = false;
    } else {
      alert("El numero ingresado es incorrecto vuelva a intentar");
      condicion = true;
    }
  } while (condicion);

  for (let i = 1; i <= cantidad; i++) {
    for (let j = 1; j <= i; j++) {
      piramide += i;
    }
    piramide += "<br>";
  }
  mensajePunto8.innerHTML = piramide;
}
let punto8 = document.getElementById("btnPunto8");
punto8.addEventListener("click", ejercicio8);

function ejercicio9() {
  let mensajePunto9 = document.getElementById("mensajePunto9");
  let numeros = "";
  for (let i = 1; i <= 500; i++) {
    numeros += i + " - ";
    if (i % 4 === 0 && i % 9 === 0) {
      numeros += "Multiplo de 4 y 9";
    } else {
      if (i % 4 === 0) {
        numeros += "Multiplo de 4";
      } else {
        if (i % 9 === 0) {
          numeros += "Multiplo de 9";
        }
      }
    }
    if (i % 5 === 0) {
      numeros += "<hr>";
    }
    numeros += "<br>";
  }
  mensajePunto9.innerHTML = numeros;
}
let punto9 = document.getElementById("btnPunto9");
punto9.addEventListener("click", ejercicio9);

function ejercicio10() {
  let mensajePunto10 = document.getElementById("mensajePunto10");
  let filas = parseInt(prompt("Ingrese el numero de filas: "));
  let columnas = parseInt(prompt("Ingrese el numero de columnas: "));
  let cantidad = filas * columnas;
  let tabla = "";

  tabla += "<table>";
  for (let i = 1; i <= filas; i++) {
    tabla += "<tr>";
    for (let j = 1; j <= columnas; j++) {
      tabla += "<td>" + cantidad-- + "</td>";
    }
    tabla += "</tr>";
  }
  tabla += "</table>";
  mensajePunto10.innerHTML = tabla;
}
let punto10 = document.getElementById("btnPunto10");
punto10.addEventListener("click", ejercicio10);

function ejercicio11() {
  let mensajePunto11 = document.getElementById("mensajePunto11");
  let edad1 = parseInt(prompt("Ingrese la edad de la primera persona: "));
  let persona1 = prompt("Ingrese el nombre de la primera persona: ");
  let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona: "));
  let persona2 = prompt("Ingrese el nombre de la segunda persona: ");
  let edad3 = parseInt(prompt("Ingrese la edad de la tercera persona: "));
  let persona3 = prompt("Ingrese el nombre de la tercera persona: ");
  let mayor = Math.max(edad1, edad2, edad3);

  if (mayor === edad1) {
    mensajePunto11.textContent = `El mayor es ${persona1} con ${edad1} años.`;
  } else if (mayor === edad2) {
    mensajePunto11.textContent = `El mayor es ${persona2} con ${edad2} años.`;
  } else if (mayor === edad3) {
    mensajePunto11.textContent = `El mayor es ${persona3} con ${edad3} años.`;
  } else {
    mensajePunto11.textContent = `Error al ejecutar la función.`;
  }
}
let punto11 = document.getElementById("btnPunto11");
punto11.addEventListener("click", ejercicio11);

function ejercicio12() {
  let mensajePunto12 = document.getElementById("mensajePunto12");
  let numero = parseInt(Math.random() * 100);
  mensajePunto12.textContent = `${numero}`;
}
let punto12 = document.getElementById("btnPunto12");
punto12.addEventListener("click", ejercicio12);

function ejercicio13() {
  let mensajePunto13 = document.getElementById("mensajePunto13");
  let texto = prompt("Ingrese el texto a mostrar: ");
  let mayusculas = texto.toUpperCase();
  mensajePunto13.textContent = `${mayusculas}`;
}
let punto13 = document.getElementById("btnPunto13");
punto13.addEventListener("click", ejercicio13);

function ejercicio14() {
  let mensajePunto14 = document.getElementById("mensajePunto14");
  let frase = prompt("Ingrese la cadena de texto: ");
  let nuevaFrase = "";

  for (let i = 0; i < frase.length; i++) {
    if (i === frase.length - 1) {
      nuevaFrase += frase.charAt(i);
    } else {
      nuevaFrase += frase.charAt(i) + "-";
    }
  }
  mensajePunto14.textContent = `${nuevaFrase}`;
}
let punto14 = document.getElementById("btnPunto14");
punto14.addEventListener("click", ejercicio14);

function ejercicio15() {
  let mensajePunto15 = document.getElementById("mensajePunto15");
  let frase = prompt("Ingrese la cadena de texto: ");
  let cantidadVocales = 0;

  for (let i = 0; i < frase.length; i++) {
    let letra = frase.charAt(i);
    if (
      letra === 'a' ||
      letra === 'A' ||
      letra === 'e' ||
      letra === 'E' ||
      letra === 'i' ||
      letra === 'I' ||
      letra === 'o' ||
      letra === 'O' ||
      letra === 'u' ||
      letra === 'U'
    ) {
      cantidadVocales++;
    }
  }
  mensajePunto15.textContent = `La frase "${frase}" tiene ${cantidadVocales} vocales`;
}
let punto15 = document.getElementById("btnPunto15");
punto15.addEventListener("click", ejercicio15);