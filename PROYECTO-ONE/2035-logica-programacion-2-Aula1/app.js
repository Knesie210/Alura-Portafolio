let numeroDeljuego = 0;//declaracion de variable global
let intentos = 0;
initialconditions();//muestra los textos principales
console.log(numeroDeljuego);//me muestra en la consola el valor
function numeroAleatorio() {//Math funcción matematica
    let numeroSecreto = Math.floor(Math.random()*10)+1;//la función genera un numero aleatorio en decimal
    return numeroSecreto; //retorna o devuelve el numero que se generó
}
function TextElement(element,text) {//objeto que permite dar texto al elemento en html
    let PageElement = document.querySelector(element);//selecciona un elemento
    PageElement.innerHTML = text;//ingresa el texto a dar
    return;
}
function initialconditions() {//funcion de condiciones inciales
    TextElement("h1", "Juego del Desafio");//elemento, texto de la función TextElement
    TextElement('p',"Indica un numero del 1 - 10");
    numeroDeljuego=numeroAleatorio();
    intentos = 1;
    return;
}
function TryVerification() {//verifica en la consola el numero que ingresa el usuario
    let numberverify = parseInt(document.getElementById('UserValue').value);//parseInt transforma el valor a numero entero
    if (numberverify === numeroDeljuego) {
        TextElement('p',`Acertaste el numero en ${intentos} ${(intentos===1)? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numberverify > numeroDeljuego) {
            TextElement('p','El numero es menor');
        } else {
            TextElement('p','El numero es mayor');
        }
        intentos++;
        clearCamp();
    }
    //document.get....me perimte mediante id tomar el valor que el usuario ingresa
    //console.log(numberverify===numeroDeljuego);//js compara con === entre peras y peras y devuelve a la consola
    //console.log(typeof(numeroDeljuego));
    //simpre verificar el tipo de datos que se esten comparando
    return;
}
function clearCamp() {//limpia la caja donde se escribe el numero
    let clearingCamp = document.querySelector('#UserValue');
    clearingCamp.value = '';
    return;
}
function restarGame() {//restablece las condiciones iniciales del juego
    clearCamp();
    initialconditions();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}
