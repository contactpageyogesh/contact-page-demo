gsap.set('.cursor',{xPercent:-50, yPercent: -50})

let cursor = document.querySelector('.cursor')
let hand = document.querySelector('.hand')
let title = document.querySelector('h1')

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
})

// Fade out hero-title on scroll
window.addEventListener('scroll', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    const fadeStart = 20; // px from top to start fading
    const fadeEnd = window.innerHeight / 2; // px from top to be fully faded
    const scrollY = window.scrollY;
    if (scrollY > fadeStart) {
        let opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        opacity = Math.max(0, Math.min(1, opacity));
        heroTitle.style.opacity = opacity;
    } else {
        heroTitle.style.opacity = 1;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Fade out hero-title on scroll
    const heroTitle = document.querySelector('.hero-title');
    const scrollContainer = document.querySelector('.scroll-container');
    if (heroTitle && scrollContainer) {
        scrollContainer.addEventListener('scroll', function() {
            const fadeStart = 0;
            const fadeEnd = window.innerHeight * 0.4; // fade over 40% of viewport for stronger effect
            const scrollTop = scrollContainer.scrollTop;
            const opacity = 1 - Math.min(scrollTop / fadeEnd, 1);
            heroTitle.style.opacity = opacity;
        });
    }

    const form = document.querySelector('.contact-form-main');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        let valid = true;
        // Only require name, phone, and email
        const fields = [
            form.querySelector('input[type="text"]'),
            form.querySelector('input[type="tel"]'),
            form.querySelector('input[type="email"]')
        ];
        fields.forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.classList.add('input-error');
            } else {
                field.classList.remove('input-error');
            }
        });
        if (!valid) {
            e.preventDefault();
        }
    });
    // Remove red border on input
    const requiredFields = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]');
    requiredFields.forEach(field => {
        field.addEventListener('input', function() {
            if (field.value.trim()) {
                field.classList.remove('input-error');
            }
        });
    });
});



    