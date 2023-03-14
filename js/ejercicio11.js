const nombre1 = prompt("Ingrese el nombre del primer usuario");
const edad1 = parseInt(prompt("Ingrese la edad del primer usuario"));
const nombre2 = prompt("Ingrese el nombre del segundo usuario");
const edad2 = parseInt(prompt("Ingrese la edad del segundo usuario"));
const nombre3 = prompt("Ingrese el nombre del tercer usuario");
const edad3 = parseInt(prompt("Ingrese la edad del tercer usuario"));

if(Math.max(edad1,edad2,edad3)===edad1){
    document.write("El mayor es ",nombre1);
}else if(Math.max(edad1,edad2,edad3)===edad2){
    document.write("El mayor es ",nombre2);
}else{
    document.write("El mayor es ",nombre3);
}