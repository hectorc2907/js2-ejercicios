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
