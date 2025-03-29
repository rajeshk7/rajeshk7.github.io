const body = document.body;
const backToTop = document.getElementById('back-to-top');

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Materialize components
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    const mobileDarkToggle = document.getElementById('mobile-dark-toggle');
    if (mobileDarkToggle) {
        mobileDarkToggle.addEventListener('click', (e) => {
            e.preventDefault();
            body.classList.toggle('dark-mode');
            
            // Save preference
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', null);
            }
        });
    }
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
}