let btnMenu = document.querySelector('.hamburger input')
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