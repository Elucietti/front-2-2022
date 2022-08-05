"use strict";

let valor=0;

let btn=document.getElementById("btn-enviar");
valor=document.getElementById("inputNumero");


function agregarElemento(){

    if (inputNumero>0) {

        let listaP=document.getElementById("listaPosi");
        let elementoP=document.createElement("li");
        elementoP.innerHTML=inputNumero.value;
        listaP.appendChild(elementoP);
        alert(valor); 

        
    } else {
        
        let listaN=document.getElementById("listaNega");
        let elementoN=document.createElement("li");
        elementoN.innerHTML=inputNumero.value;
        listaN.appendChild(elementoN);
        alert(valor); 

    }
    

}






