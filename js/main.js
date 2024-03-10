let btnMenu = document.querySelector('.hamburger input')
let flechaAdelanteBtn = document.querySelector('.flecha-img')
let flechaAtrasBtn = document.querySelectorAll('.flecha-img-atras')
let barraHabilidades = document.querySelectorAll('.barra-grafica')
let opcionesNavegacion = document.querySelectorAll('.navegacion li a')
let upBtn = document.querySelector('#up')
let pagina = document.querySelector('#inicio')
let habilidades = document.querySelector('#habilidades')

window.addEventListener('scroll',()=>{
    let ubicacion = pagina.getBoundingClientRect().top;
    if(ubicacion < 0){
    upBtn.classList.add('up-activado')
    }else{
    upBtn.classList.remove('up-activado')
    }
})


/* let habilidades = document.getElementById('habilidades').addEventListener('') */
opcionesNavegacion.forEach(element => {

    element.addEventListener('mouseover',(e)=>{
        console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.style.width = '100%'
    })

})

opcionesNavegacion.forEach(element => {

    element.addEventListener('mouseout',(e)=>{
        console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.style.width = '0'
    })

})

window.addEventListener('scroll',()=>{
    let ubicacion = habilidades.getBoundingClientRect().bottom;
    console.log(habilidades.getBoundingClientRect())
    if(ubicacion < 1200){
        console.log('a')
        barraHabilidades.forEach(element => {
            let porcentaje = element.children[1].textContent
            element.children[2].querySelector('.barra-interna').style.width = porcentaje
        });
        }else{
            barraHabilidades.forEach(element => {
                element.children[2].querySelector('.barra-interna').style.width = '0px'
            });
        }
    
})
/* barraHabilidades.forEach(element => {
    let porcentaje = element.children[1].textContent
    element.children[2].querySelector('.barra-interna').style.width = porcentaje
}); */

flechaAdelanteBtn.addEventListener('click',()=>{
document.querySelector('.cont-habilidades').classList.add('cont-habilidades-ocultas')
document.querySelector('.cont-frameworks').classList.add('cont-frameworks-activas')

})

flechaAtrasBtn.forEach(element =>{
    element.addEventListener('click',()=>{
        document.querySelector('.cont-habilidades').classList.remove('cont-habilidades-ocultas')
        document.querySelector('.cont-frameworks').classList.remove('cont-frameworks-activas')
        
        })
})

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

