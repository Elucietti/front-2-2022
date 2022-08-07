"strict";

let boton=document.getElementById("btn");
boton.addEventListener("click", estado);

function estado(){

    let chekeo = document.getElementById('chekeo');
    let saludo=document.querySelector(".saludo");


    if (chekeo.checked) {

            let titulo1=document.getElementById("titulo1");
            let crear=document.createElement("h1");
            crear.innerHTML="Hola, elemento marcado";
            saludo.appendChild(crear);

    } else {

            let titulo2=document.getElementById("titulo2");
            let crear2=document.createElement("h2");
            crear2.innerHTML="Hola, elemento desmarcado";
            saludo.appendChild(crear2);        
    }

}

