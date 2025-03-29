const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
// Check for saved theme preference
const darkMode = localStorage.getItem('darkMode');
// Back-to-top button functionality
const backToTop = document.getElementById('back-to-top');

document.addEventListener('DOMContentLoaded', function () {
    // Initialize sidenav for mobile
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    const parallaxElems = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxElems);

    // Initialize circular progress animations with tooltips
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', percent / 100);

        // Add tooltip to display percentage
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = `${percent}%`;
        circle.appendChild(tooltip);
    });

    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    new Typed('#typed', {
        strings: ["Backend Developer", "Android Enthusiast", "AI & LLM Specialist", "Tech Innovator"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Initialize Materialize Carousel
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', null);
    }
});