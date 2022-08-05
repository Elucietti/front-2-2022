"use strict";
let valor=0;
let boton=document.getElementById("btn-inicio");
boton.addEventListener("click",cuenta);




function cuenta(){

    let lista=document.getElementById("lista");

   for (let i = 0; i <100; i++) {
 
   
    let elemento = document.createElement("li"); 
    lista.appendChild(elemento);
    
    }

}



