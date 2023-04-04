let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonPiro = document.getElementById('boton-piro')
    botonPiro.addEventListener('click', ataquePiro)
    let botonAqua = document.getElementById('boton-aqua')
    botonAqua.addEventListener('click', ataqueAqua)
    let botonTerra = document.getElementById('boton-terra')
    botonTerra.addEventListener('click', ataqueTerra)
}

function seleccionarMascotaJugador () {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spamMascotaJugador = document.getElementById('mascota-jugador')


    if      (inputHipodoge.checked){
        spamMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spamMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spamMascotaJugador.innerHTML = 'Ratigueya'
    } else  {
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo ()

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spamMacotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spamMacotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatorio == 2) {
        spamMacotaEnemigo.innerHTML = 'Capipepo'
    }else if (mascotaAleatorio == 3) {
        spamMacotaEnemigo.innerHTML = 'Ratigueya'
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
}

function aleatorio (min, max){
    return Math.floor(Math.random()* (max - min + 1) +min)
}


window.addEventListener('load', iniciarJuego)
//otra manera de llamar al script después de que se cargue todo el HTML
//la función iniciarJuego se carga cuando ya todo el contenido está cargado.