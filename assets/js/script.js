/**
* script.js for Intermountain Steel Manufacturing Inc.
* v5.0 - Triptych & Overlay Navigation Logic
*/
document.addEventListener('DOMContentLoaded', function() {

    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const navOverlay = document.getElementById('nav-overlay');
    const closeBtn = document.getElementById('nav-close-btn');

    // Toggle Navigation Overlay
    if (menuBtn && navOverlay && closeBtn) {
        menuBtn.addEventListener('click', () => {
            navOverlay.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            navOverlay.classList.remove('active');
        });

        // Optional: close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
                navOverlay.classList.remove('active');
            }
        });
    }
    
    // Header background change on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Initialize WOW.js for animations
    new WOW().init();
});
