let btnMenu = document.querySelector('.hamburger input')
let flechaAdelanteBtn = document.querySelector('.flecha-img')
let flechaAtrasBtn = document.querySelectorAll('.flecha-img-atras')
let barraHabilidades = document.querySelectorAll('.barra-grafica')
let opcionesNavegacion = document.querySelectorAll('.navegacion li a')
let upBtn = document.querySelector('#up')
let pagina = document.querySelector('#inicio')
let habilidades = document.querySelector('#habilidades')
let foto = document.querySelector('#foto')
let educacion = document.querySelector('.cont-educacion')
let proyectos = document.querySelector('.cont-proyecto')
let cerrarBtn = document.querySelector('.ico-cerrar')
let contactameBtn = document.querySelector('#contactame')
let contactameReducidoBtn = document.querySelector('#contactame-reducido')
let btnLeft = document.querySelector(".btn-left")
let btnRight = document.querySelector(".btn-right")
let slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".slider-section")
let operacion = 0
let counter = 0
let widthImg = 100 / sliderSection.length

setInterval(() => {
    moveToRight()
}, 3500)

sliderSection.forEach(e => {

    e.addEventListener('click', (e) => {
        document.querySelector(".img-ampliada .ampliado").innerHTML = `<img src='${e.target.src}'>`
        document.querySelector(".img-ampliada").style.opacity = '1'
        document.querySelector(".img-ampliada").style.pointerEvents = 'all'
        document.querySelector(".img-ampliada").addEventListener("click", (e) => {
            if (document.querySelector(".img-ampliada") == e.target) {
                document.querySelector(".img-ampliada").style.opacity = '0'
                document.querySelector(".img-ampliada").style.pointerEvents = 'none'
            }
        })
    })

})



btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())
function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
        return
    }
    counter++
    operacion = operacion + widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"
}


function moveToLeft() {
    counter--
    if (counter < 0) {
        counter = sliderSection.length - 1
        operacion = widthImg * (sliderSection.length - 1)
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
        return
    }
    operacion = operacion - widthImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease .6s"
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.primera-foto').classList.add('primera-foto-activacion')

})

contactameReducidoBtn.addEventListener('click', () => {
    if (!document.querySelector('.redes-sociales').classList.contains('redes-sociales-activado')) {
        contactameReducidoBtn.textContent = '\u2715 Cerrar lista'
        document.querySelector('.redes-sociales').classList.add('redes-sociales-activado')
    } else {
        contactameReducidoBtn.textContent = 'Contactame'
        document.querySelector('.redes-sociales').classList.remove('redes-sociales-activado')
    }

})

contactameBtn.addEventListener('click', () => {
    if (!document.querySelector('.redes-sociales').classList.contains('redes-sociales-activado')) {
        contactameBtn.textContent = '\u2715 Cerrar lista'
        document.querySelector('.redes-sociales').classList.add('redes-sociales-activado')
    } else {
        contactameBtn.textContent = 'Contactame'
        document.querySelector('.redes-sociales').classList.remove('redes-sociales-activado')
    }
})

/* cerrarBtn.addEventListener('click',()=>{
    document.querySelector('.modal-contacto').classList.remove('modal-contacto-activado')
})
 */

window.addEventListener('scroll', () => {
    let ubicacion = proyectos.getBoundingClientRect().top;
    console.log(ubicacion)
    if (ubicacion < 250) {
        proyectos.classList.add('cont-proyecto-activado')
    }

})

window.addEventListener('scroll', () => {
    let ubicacion = educacion.getBoundingClientRect().top;

    if (ubicacion < 250) {
        educacion.classList.add('cont-educacion-activado')
    }

})

window.addEventListener('scroll', () => {
    let ubicacion = foto.getBoundingClientRect().top;
    if (ubicacion < 460) {
        foto.classList.add('foto-activado')
    }
})


window.addEventListener('scroll', () => {
    let ubicacion = pagina.getBoundingClientRect().top;
    if (ubicacion < 0) {
        upBtn.classList.add('up-activado')
    } else {
        upBtn.classList.remove('up-activado')
    }
})


/* let habilidades = document.getElementById('habilidades').addEventListener('') */
opcionesNavegacion.forEach(element => {

    element.addEventListener('mouseover', (e) => {
        console.log(e.target.nextElementSibling)
        e.target.nextElementSibling.style.width = '100%'
    })

})

opcionesNavegacion.forEach(element => {

    element.addEventListener('mouseout', (e) => {
        console.log(e.target.nextElementSibling)
        e.target.nextElementSibling.style.width = '0'
    })

})

window.addEventListener('scroll', () => {
    let ubicacion = habilidades.getBoundingClientRect().bottom;
    if (ubicacion < 1200) {
        barraHabilidades.forEach(element => {
            let porcentaje = element.children[1].textContent
            element.children[2].querySelector('.barra-interna').style.width = porcentaje
        });
    } else {
        barraHabilidades.forEach(element => {
            element.children[2].querySelector('.barra-interna').style.width = '0px'
        });
    }

})
/* barraHabilidades.forEach(element => {
    let porcentaje = element.children[1].textContent
    element.children[2].querySelector('.barra-interna').style.width = porcentaje
}); */

/* flechaAdelanteBtn.addEventListener('click', () => {
    document.querySelector('.cont-habilidades').classList.add('cont-habilidades-ocultas')
    document.querySelector('.cont-frameworks').classList.add('cont-frameworks-activas')

})

flechaAtrasBtn.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.cont-habilidades').classList.remove('cont-habilidades-ocultas')
        document.querySelector('.cont-frameworks').classList.remove('cont-frameworks-activas')

    })
}) */

btnMenu.addEventListener('click', (e) => {
    if (!btnMenu.classList.contains('precionado')) {
        btnMenu.classList.add('precionado')
        document.querySelector('.contenido-menu').classList.add('contenido-menu-activado')
        document.querySelector('.menu').classList.add('menu-activado')
        setTimeout(() => {
            document.querySelector('.linea-1').classList.add('linea-1-activado')
            document.querySelector('.linea-2').classList.add('linea-2-activado')
            document.querySelector('.linea-3').classList.add('linea-3-activado')
            document.querySelector('.opciones ul').classList.add('opciones-activado')
        }, 250);

    } else {
        btnMenu.classList.remove('precionado')
        document.querySelector('.contenido-menu').classList.remove('contenido-menu-activado')
        document.querySelector('.menu').classList.remove('menu-activado')
        document.querySelector('.linea-1').classList.remove('linea-1-activado')
        document.querySelector('.linea-2').classList.remove('linea-2-activado')
        document.querySelector('.linea-3').classList.remove('linea-3-activado')
        document.querySelector('.opciones ul').classList.remove('opciones-activado')
    }
})



