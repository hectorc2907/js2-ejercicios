let filas = parseInt(prompt("Ingrese el Numero de filas"));
let columnas = parseInt(prompt("Ingrese el Numero de columnas"));
let cantidad = filas*columnas;

document.write(`<table><tbody>`)
        for(let contador1=filas;contador1>=1;contador1--){
        document.write(`<tr>`);
            for(let contador2=columnas;contador2>=1;contador2--){
                document.write(`<td>`,cantidad--,`</td>`)
            }
        document.write(`</tr>`);}
document.write(`</tbody></table>`);