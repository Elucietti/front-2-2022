let botonLista=document.getElementById("botonLista");
let lista=document.getElementById("lista");
let inputList=document.getElementById("inputLista");

let botonParrafo=document.getElementById("botonParrafo");
let divParrafo=document.getElementById("divParrafo");
let inputParrafo=document.getElementById("inputParrafo");


function agregarElemento(){
    let elemento=document.createElement("li");
    elemento.innerHTML= inputList.value;
    lista.appendChild(elemento);
}

function agregarParrafo(){

    let elementP=document.createElement("P");
    elementP.innerHTML= inputParrafo.value;
    divParrafo.appendChild(elementP);

}