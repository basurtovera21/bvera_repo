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

            console.log(`Intento de registro: ${email}`);

            try {
                await new Promise(resolve => setTimeout(resolve, 1500)); 
                alert(`Registro completado: ${email} ha sido registrado.`);
                emailInput.value = '';
                
            } catch (error) {
                console.error('Error durante el proceso de registro:', error);
                alert('Ocurrió un error. Registre nuevamente.');
                
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Confirmar registro';
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' 
                });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupSmoothScroll(); 
    setupRegistration();
});