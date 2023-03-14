let resto = "";

while (confirm("Presione cancelar para finalizar el ciclo")!=false){
    let dni = parseInt(prompt("Ingrese el numero de DNI"));
    if(typeof(dni)=='number'){
        if(dni>=0 && dni<=99999999){
            resto = dni%23;
            switch (resto) {
                case 0:
                    alert("Le corresponde la letra T");
                    break;
                case 1:
                    alert("Le corresponde la letra R");
                    break;
                case 2:
                    alert("Le corresponde la letra W");
                    break;
                case 3:
                    alert("Le corresponde la letra A");
                    break;
                case 4:
                    alert("Le corresponde la letra G");
                    break;
                case 5:
                    alert("Le corresponde la letra M");
                    break;
                case 6:
                    alert("Le corresponde la letra Y");
                    break;
                case 7:
                    alert("Le corresponde la letra P");
                    break;
                case 8:
                    alert("Le corresponde la letra D");
                    break;
                case 9:
                    alert("Le corresponde la letra X");
                    break;
                case 10:
                    alert("Le corresponde la letra B");
                    break;
                case 11:
                    alert("Le corresponde la letra N");
                    break;
                case 12:
                    alert("Le corresponde la letra J");
                    break;
                case 13:
                    alert("Le corresponde la letra Z");
                    break;
                case 14:
                    alert("Le corresponde la letra S");
                    break;
                case 15:
                    alert("Le corresponde la letra Q");
                    break;
                case 16:
                    alert("Le corresponde la letra V");
                    break;
                case 17:
                    alert("Le corresponde la letra H");
                    break;
                case 18:
                    alert("Le corresponde la letra L");
                    break;
                case 19:
                    alert("Le corresponde la letra C");
                    break;
                case 20:
                    alert("Le corresponde la letra K");
                    break;
                case 21:
                    alert("Le corresponde la letra E");
                    break;
                default:
                    break;
            }
        }
    }else{
        alert("El numero ingresado no es un numero");
    }
}
