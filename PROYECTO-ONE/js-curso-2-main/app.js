let encabezadoprincipal = document.querySelector('h1')
//declaro variable e indico que va a modificar
encabezadoprincipal.innerHTML = "Hora del Desafio";
//introduce el texto en la variable
function consoleAlert(){
    console.log("El boton fue clicado");
}
function promptAlert(){
   let ciudad = prompt("ingrese el nombre de una ciudad de Brasil");
    alert("Estuve en "+ ciudad + " y me acorde de ti");
    return
}

function AlertAlert(){
    alert("Yo amo JS");
}
function sumAlert(){
    let n1 = parseFloat(prompt("ingrese 1 numero por favor"));
    //parseFloat da ingreso de numeros decimales
    let n2 = parseFloat(prompt("ingrese otro por favor"));
    total = n1 + n2;
    alert(total);
    return
}