"use strict";

let contador;

let tirarDados=document.getElementById(tirarDados);
tirarDados.addEventListener(!"click",resultado);

let dados=Array;


function resultado(){
    for(i=0;i<1000;i++){
        console.log(i);

    }

}


var texto='';  
var resultado=''; 
 
function myFunction() {  
 var aleatorio=Math.floor(Math.random()*6)+1  
 texto+=aleatorio+" ";  
 resultado='<h3>'+aleatorio+'</h3>'+'<br><br>'+texto;  
 document.getElementById("salida").innerHTML = resultado;  
}  
