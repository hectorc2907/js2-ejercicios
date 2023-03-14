for(let contador = 1; contador<= 500; contador++){
    document.write(contador, ' - <br>')
    if(contador%4===0){
        document.write(contador, ' - Multiplo de 4<br>');
    }
    if(contador%9===0){
        document.write(contador, ' - Multiplo de 9<br>');
    }
    if(contador%5===0){
        document.write('<hr>');
    }
}