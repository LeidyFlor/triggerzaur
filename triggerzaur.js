let ataqueJugador
let ataqueEnemigo
let mascotaJugador
let mascotaOponente
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('Elegir-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'none'


    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonPiro = document.getElementById('boton-piro')
    botonPiro.addEventListener('click', ataquePiro)
    let botonAqua = document.getElementById('boton-aqua')
    botonAqua.addEventListener('click', ataqueAqua)
    let botonTerra = document.getElementById('boton-terra')
    botonTerra.addEventListener('click', ataqueTerra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener ('click', reiniciarJuego)
}

function seleccionarMascotaJugador () {
    let sectionSeleccionarAtaque = document.getElementById('Elegir-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let sectionSeleccionarMascotas = document.getElementById('Elegir-triggerzaur')
    sectionSeleccionarMascotas.style.display = 'none'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spamMascotaJugador = document.getElementById('mascota-jugador')


    if      (inputHipodoge.checked){
        spamMascotaJugador.innerHTML = 'Hipodoge'
        mascotaJugador = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spamMascotaJugador.innerHTML = 'Capipepo'
        mascotaJugador = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spamMascotaJugador.innerHTML = 'Ratigueya'
        mascotaJugador = 'Ratigueya'
    } else  {
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo ()

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    mascotaOponente = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        mascotaOponente.innerHTML = 'Hipodoge'
        mascotaOponente = 'Hipodoge'
    }else if (mascotaAleatorio == 2) {
        mascotaOponente.innerHTML = 'Capipepo'
        mascotaOponente = 'Capipepo'
    }else if (mascotaAleatorio == 3) {
        mascotaOponente.innerHTML = 'Ratigueya'
        mascotaOponente = 'Ratigueya'
    }
    
}

function ataquePiro(){
    ataqueJugador = 'PIRO🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAqua(){
    ataqueJugador = 'AQUA💧'
    ataqueAleatorioEnemigo()
}
function ataqueTerra(){
    ataqueJugador = 'TERRA🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio ==1 ){
        ataqueEnemigo = 'PIRO🔥'
    }else if (ataqueAleatorio ==2 ){
        ataqueEnemigo = 'AQUA💧'
    }else {
        ataqueEnemigo = 'TERRA🌱'
    }

    definirResultadoCombate()
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    
    let anuncioCombate = document.createElement('p')
    anuncioCombate.innerHTML = 'Tu ' + mascotaJugador + ' ataca con elemento ' + ataqueJugador + 
    ', el triggerzaur ' + mascotaOponente +' enemigo ataca con elemento ' + ataqueEnemigo + resultado

    sectionMensajes.appendChild(anuncioCombate)
    
}

function aleatorio (min, max){
    return Math.floor(Math.random()* (max - min + 1) +min)
}
function definirResultadoCombate(){
    let spamVidaJugador = document.getElementById("vida-jugador")
    let spamVidaEnemigo = document.getElementById("vida-enemigo")
    
    if (ataqueJugador == ataqueEnemigo){
        crearMensaje ('- Empate🥱')
     
    }else if (ataqueJugador == 'PIRO🔥' && ataqueEnemigo == 'TERRA🌱' ||
        ataqueJugador == 'AQUA💧' && ataqueEnemigo == 'PIRO🔥' ||
        ataqueJugador == 'TERRA🌱' && ataqueEnemigo == 'AQUA💧') {
        crearMensaje ('- Ganaste 🎊🎉')
        vidaEnemigo--
        spamVidaEnemigo.innerHTML = vidaEnemigo
       
    }else {
        crearMensaje ('- Perdiste😓')
       vidaJugador--
       spamVidaJugador.innerHTML = vidaJugador
    }
    revisarVidas()
}
function crearMensajeFinal(resultadoFinal){
    let finCombate = document.getElementById('fin')
    let anuncioFin =document.createElement('p')

    anuncioFin.innerHTML = resultadoFinal

    finCombate.appendChild(anuncioFin)

    let botonPiro = document.getElementById('boton-piro')
    botonPiro.disabled = true
    let botonAqua = document.getElementById('boton-aqua')
    botonAqua.disabled = true
    let botonTerra = document.getElementById('boton-terra')
    botonTerra.disabled = true

    let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'block'
}
function revisarVidas(){
   
    if (vidaJugador == 0){
        crearMensajeFinal('¡Ohh no! Tu triggerzaur se ha debilitado 😢, pero no te preocupes da click en Reiniciar y comenzemos de nuevo 😁')
        finCombate.appendChild(anuncioFin)
    }else if (vidaEnemigo == 0){
        crearMensajeFinal('¡Felicidades! El triggerzaur enemigo se ha debilitado , si quieres volver a jugar da click en Reiniciar y comenzemos de nuevo 😁')
    }
}
function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
//otra manera de llamar al script después de que se cargue todo el HTML
//la función iniciarJuego se carga cuando ya todo el contenido está cargado.