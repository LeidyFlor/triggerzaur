function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
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
    let ataqueAleatorio = aleatorio(1,3)
    let spamMacotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spamMacotaEnemigo.innerHTML = 'Hipodoge'
    }else if (ataqueAleatorio == 2) {
        spamMacotaEnemigo.innerHTML = 'Capipepo'
    }else if (ataqueAleatorio == 3) {
        spamMacotaEnemigo.innerHTML = 'Ratigueya'
    }
    
}

function aleatorio (min, max){
    return Math.floor(Math.random()* (max - min + 1) +min)
}


window.addEventListener('load', iniciarJuego)