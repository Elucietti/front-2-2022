"use strict";




let btn_nombre= document.getElementById("btn-enviar");
btn_nombre.addEventListener("click",  mostrar);




function mostrar(){

    let nombre = "anonimo";
    let inputNombre = document.getElementById("inputNombre");
    nombre = inputNombre.value;
    

    let apellido = "anonimo";
    let inputApellido = document.getElementById("inputApellido");
    apellido = inputApellido.value;
  

    let edad = "anonimo";
    let inputEdad = document.getElementById("inputEdad");
    edad = inputEdad.value;
    alert(" Nombre: " + nombre + "  Apellido: " + apellido +  "  Edad: "  + edad);
}

