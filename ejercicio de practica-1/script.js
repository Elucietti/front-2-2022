"use strict";

let boton=document.getElementById("btn-numero");
boton.addEventListener("click",comparar);


function comparar(){
    let valor = document.getElementById('input');
    valor = input.value;
    if (valor>0) {

        alert('positivo');

    } else {
     
        alert('negativo');
    }
   

}