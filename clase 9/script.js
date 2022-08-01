"use strict";




let btn_nombre= document.getElementById("btn_nombre");
btn_nombre.addEventListener("click",  mostrar);

let btn_apellido= document.getElementById("btn_apellido");
btn_apellido.addEventListener("click",  mostrar);

let btn_edad= document.getElementById("btn_edad");
btn_edad.addEventListener("click",  mostrar);




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

