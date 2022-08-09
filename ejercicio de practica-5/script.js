"strict";


alert("el nombre debe tener min 3 y max 20 caracteres");
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


/*
function nombreValido(nombre){
  if (document.fvalida.nombre.value.length==0){
    alert("Tiene que escribir su nombre")
    document.validar.nombre.focus()
    return 0;
}

*/
function apellidoValido(apellido){}
function mailValido(mail){}
function consultaValido(consulta){}

