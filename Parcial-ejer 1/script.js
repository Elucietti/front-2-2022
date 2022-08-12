"strict";



let boton=document.getElementById("btn-suma");
boton.addEventListener("click",suma);

function suma(){

    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;

    let mas= parseInt (num1) + parseInt(num2);

    document.querySelector(".resultado").innerHTML = mas;
}




let boton2=document.getElementById("btn-resta");
boton2.addEventListener("click",resta);

function resta(){

    let num1=document.getElementById("numero1");
    let num2=document.getElementById("numero2");

    let menos= parseInt(num1) - parseInt(num2);

    document.querySelector(".resultado").innerHTML = menos;


}