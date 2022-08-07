"strict";

let boton=document.getElementById("btn");
boton.addEventListener("click", mostrar);
document.querySelector("div").classList.toggle("oculto");

function mostrar(){
    
    
    let miDiv=document.querySelector("div");
    let crear=document.createElement("div");
    crear.innerHTML="nuevo div"
     miDiv.appendChild(crear); 
     document.querySelector("div").classList.toggle("oculto");

    alert("Nuevo Div");
}

