// Scripts del portafolio 

// Navegación entre secciones
document.addEventListener('DOMContentLoaded', () => {
    // 1. Event listeners para los botones de navegación
    const navButtons = document.querySelectorAll('.nav-buttons button');
    const sections = document.querySelectorAll('section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            
            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('visible');
                section.classList.add('hidden');
            });

            // Mostrar la sección objetivo
            const targetSection = document.getElementById(targetId);
            targetSection.classList.remove('hidden');
            targetSection.classList.add('visible');
        });
    });

    // 2. Handler para el formulario de contacto
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado');
            contactForm.reset();
        });
    }

    // 3. IntersectionObserver para el video
    const video = document.querySelector('#presentation video');
    if (video) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, {
            threshold: 0.5 // El video debe estar al menos 50% visible
        });

        videoObserver.observe(video);
    }
}); 