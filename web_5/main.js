function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-visible');
        });

        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('nav-visible')) {
                    mainNav.classList.remove('nav-visible');
                }
            });
        });
    }
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        });
    });
}

function setupRegistration() {
    const form = document.getElementById('registration-form');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const emailInput = document.getElementById('reg-email');
            const email = emailInput.value.trim();
            const submitButton = document.querySelector('.registration-button');

            if (!email) {
                alert('Por favor, registre un correo electrónico válido.');
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = 'Registrando...';

            try {
                const response = await fetch('/register-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `email=${encodeURIComponent(email)}` 
                });

                if (response.status === 204) {
                    alert('Registro terminado');
                    emailInput.value = '';

                    window.location.reload(); 

                } else if (response.status === 400) {
                     alert('Por favor, registre un correo electrónico válido.');
                } else {
                    // Error del servidor (500)
                    alert('Ocurrió un error en el servidor. Registre nuevamente.');
                }

            } catch (error) {
                console.error('Error de red durante el registro:', error);
                alert('No se pudo contactar al servidor. Revise la conexión.');

            } finally {
                if (response.status !== 204) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Confirmar registro';
                }
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupSmoothScroll(); 
    setupRegistration();
});
