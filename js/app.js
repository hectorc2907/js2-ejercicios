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
