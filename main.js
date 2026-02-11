document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.classList.add('bg-slate-900/90');
            // navbar.classList.remove('glass-dark'); // Optional: replace glass with solid for performance if needed
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.remove('bg-slate-900/90');
            // navbar.classList.add('glass-dark');
        }
    });

    // Mobile Menu Toggle (handled inline in HTML for simplicity, but we can add better logic here if needed)
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate (add 'opacity-0' class in HTML to elements you want to fade in)
    // For now, I'll just log availability
    console.log("Aquafix script loaded.");

    // Shop FIltering Logic (Mockup)
    const filterCheckboxes = document.querySelectorAll('.form-checkbox');
    filterCheckboxes.forEach(box => {
        box.addEventListener('change', () => {
            console.log('Filter changed:', box.checked);
            // In a real app, this would filter the product grid
        });
    });

});

// Add these utility classes dynamically or they should be in tailwind config/CSS
// Since we used CDN, we can inject styles if needed, but Tailwind has animate-bounce etc.
// We used 'animate-fade-in-up' in valid markup, need to define it in the tailwind config script within HTML
// But updating the script tag in HTML dynamically is hard now.
// I will rely on the inline styles or default tailwind animations where possible.
// Wait, I defined `animate-fade-in-up` in the HTML classes but haven't defined the keyframes in the text/tailwind config in the HTML head.
// I should have added it to the tailwind config in the HTML.
// Let me update index.html to include the animation definition in the Tailwind config script.

