let contador=0;

let botonContar = document.getElementById("sumarClicks");
botonContar.addEventListener("click",contarClicks);

let botonMostrar = document.getElementById("mostrarCantidadClicks");
botonMostrar.addEventListener("click",mostrarClicks);


let botonrestar = document.getElementById("restarClicks");
botonrestar.addEventListener("click",restarClicks);




function restarClicks(){
    contador--;
    document.querySelector("h1").innerHTML=contador;
    }

function contarClicks(){
    contador++;
    document.querySelector("h1").innerHTML=contador;    
}

function mostrarClicks(){

    document.querySelector("h1").innerHTML =contador;

}