
let contador=0;

let botonContar=document.getElementById("contarlosClicks");
botonContar.addEventListener("click",contarClicks);

let botonMostrar=document.getElementById("mostrarCantidadClicks");
botonMostrar.addEventListener("click",mostrarClicks);

let nombre=document.getElementById("mostrarTexto");
nombre.addEventListener("input",mostrarNombre);

function contarClicks(){
    contador++;
    console.log(contador);
}

function mostrarClicks(){
    alert(contador);

}

function mostrarNombre(){
    console.log(nombre.value);


}