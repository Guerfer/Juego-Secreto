
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

/* el elemento es como escoger lo que vamos a modificar */
/* y el texto es como el mensaje que aparecera */

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
/* la funcion pide un numero y determina que el caracter sea numero y  lo compara*/
/* para determinar que el valor y el tipo sea igual usuando el triple === */
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
/*    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario); 
    console.log(numeroDeUsuario === numeroSecreto);
    esto erar para hacer pruebas
    para identificar que el caracter que ingresamos sea tomado como numero*/
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Felicidades, acertaste el numero en ${intentos} ${intentos ===1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(numeroDeUsuario > numeroSecreto){;
        asignarTextoElemento('p', 'El numero secreto es menor');
    }   else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }  
    intentos ++;
    limpiarCaja();

    return;
}
// esta funcion es para limpiar lo ingresado por usuario y la acortamos.
function limpiarCaja (){
    /* let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value= ''; */
    document.querySelector('#valorUsuario').value = '';
}
/* asi es como estaremos llamando a la funcion para acortar codigo*/

function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        
    // si ya sorteamos todos los numeros guardados
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else { 
// si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}
function condicionesIniciales(){
    // este es el resultado de la funcion de la fila 8 de arriba//
    asignarTextoElemento('h1', 'juego del numero secreto actualizado');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros a ingresar
    //generar el numero aleatorio
    //deshabilitar nuevamente el boton de nuevo juego
    condicionesIniciales();
    //reiniciar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();