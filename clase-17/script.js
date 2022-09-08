
let productos=["leche", "Aceite", "fideos"];
let precios=[120, 180, 140];
let stock=[20, 15, 10];
let valorTotal=0;


let btnComprar=document.getElementById("botonComprar");
btnComprar.addEventListener("click", comprarProducto);

window.onload = agregarProducto();


function agregarProducto(){

    let contenedor=document.getElementById("contenedorProductos");

    for(let i=0;i<stock.length;i++){

        let articulos=document.createElement("div");
        articulos.classList.add("item");
        articulos.id=productos[i];
        let nombreArticulo=document.createElement("p");
        nombreArticulo.innerHTML=productos[i];
        let precioArticulo=document.createElement("p");
        precioArticulo.innerHTML=precios[i];
        let cantidadArticulo=document.createElement("input");
        cantidadArticulo.id=stock[i];
        cantidadArticulo.type="number";
        cantidadArticulo.max=(stock[i]);
        cantidadArticulo.min="0";
        articulos.appendChild(nombreArticulo);
        articulos.appendChild(precioArticulo);
        articulos.appendChild(cantidadArticulo);
        contenedor.appendChild(articulos);

    }

}

function comprarProducto(){

    for(let i=0;i<stock.length;i++){

        let selectorCantidad=document.getElementById(stock[i]);
        let cantidadSeleccionada =Number(selectorCantidad.value);


        if(cantidadSeleccionada>stock[i]){


            let nega=document.createElement("p");
            nega.innerHTML="no hay stock del producto seleccionado  "  +  productos[i];
            nega.classList.add("nega");
            contenedor.appendChild(nega);

        }else if(cantidadSeleccionada>0){
            
            let lista=document.createElement("li");
            lista.innerHTML="compraste "+ cantidadSeleccionada+ " unidades de "+ productos[i]+ " Valor unidad "+ precios[i];
            lista.classList.add("listaProductos");
            contenedor.appendChild(lista);
            let subTotal = cantidadSeleccionada * precios[i];
            let totalPago=document.createElement("P");
            totalPago.innerHTML= "sub total: " + subTotal;
            totalPago.classList.add("listaProductos");
            contenedor.appendChild(totalPago);
            valorTotal+=cantidadSeleccionada * precios[i];   

            let totalCompra=document.createElement("p");
            totalCompra.innerHTML= "total a pagar: " + valorTotal;
            totalCompra.classList.add("total");
            contenedor.appendChild(totalCompra);

          
    
        }else if (cantidadSeleccionada <= 0) {

                let vacio=document.createElement("p");
                vacio.innerHTML="Debe seleccionar al menos un producto";
                vacio.classList.add("listaProductos");
                contenedor.appendChild(vacio);
       
       
         
       }
      
    }


}

