function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Función de desplazamiento suave
document.querySelectorAll('.nav-list a, .footer-section.links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Prevenir el comportamiento predeterminado del enlace

        // Obtener la sección a la que se quiere desplazar
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Desplazamiento suave usando scrollIntoView
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'  // Alinea al inicio de la sección
        });
    });
});

document.getElementById('load-more').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.portfolio-item.hidden');

    for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
        hiddenItems[i].classList.add('visible');
    }

    // Desplazar el botón "Cargar más proyectos" hacia abajo
    this.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });

    // Si ya no quedan más elementos ocultos, ocultar el botón
    if (document.querySelectorAll('.portfolio-item.hidden').length === 0) {
        this.style.display = 'none';
    }
});

