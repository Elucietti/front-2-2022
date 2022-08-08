"strict";


let vBoton=document.getElementById("btn-enviar");
let vNombre=document.getElementById("nombre");
let vApellido=document.getElementById("apellido");
let vMail=document.getElementById("mail");
let vConsulta=document.getElementById("consulta");

vBoton.addEventListener("click",function(e){validar(vNombre,vApellido,vMail,vConsulta)});

function validar(nombre,apellido,mail,consulta){

    if(!nombreValido(nombre.value)){

        alert("el nombre debe tener min 3 y max 20 caracteres");
        nombre.focus();
        return ;
    }






}



function nombreValido(nombre){}
function apellidoValido(apellido){}
function mailValido(mail){}
function consultaValido(consulta){}



/*

/
function emailValido(email) {
  console.log(email)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}











/*
function sinValidar(e){



}

function validar(){

        let nombre=document.getElementById("nombre");
        let apellido=document.getElementById("apellido");
        let mail=document.getElementById("mail");
        let consulta=document.getElementById("consulta");

    if(mail.validity.typeMismatch){
        mail.setCustomValidity("ingrese su Mail!");

      }  else{
        mail.setCustomValidity("");
      }

}










const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});

*/