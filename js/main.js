handleResize();
function handleResize() {
    // Obtén el ancho actual de la pantalla
    var screenWidth = window.innerWidth;
    console.log(screenWidth)
    // Puedes agregar lógica aquí para realizar acciones específicas según el ancho de la pantalla
    if (screenWidth <= 500) {
        let button = document.createElement('button')
        button.id = 'contactame'
        button.textContent = 'Contactame'
        button.classList.add('contactame-reducido')
        document.querySelector('nav').remove()
        document.querySelector('header').appendChild(button)
        document.querySelector('.logo').classList.add('logo-reducido')
        
    }
}

window.addEventListener('resize', handleResize);

        // Llama a la función al cargar la página para manejar el estado inicial
       