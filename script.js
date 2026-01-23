document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicator = document.querySelector('.slide-indicator');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlide() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Update indicator (e.g., 01, 02)
        indicator.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight' || e.code === 'Space') {
            nextSlide();
        } else if (e.code === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initial Display
    updateSlide();
});
