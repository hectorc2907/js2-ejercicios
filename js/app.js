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
