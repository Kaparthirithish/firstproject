// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Dropdown Toggle for Mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            dropdown.classList.toggle('active');
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    
    const diff = endOfDay - now;
    
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = String(Math.floor(hours)).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Add to Cart Animation
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Animation effect
        button.textContent = 'Added!';
        button.style.backgroundColor = 'var(--success)';
        
        // Update cart count
        const currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
        
        // Reset button after animation
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = 'var(--primary)';
        }, 1000);
    });
});

// Testimonial Slider
const testimonialSlider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

testimonialSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - testimonialSlider.offsetLeft;
    scrollLeft = testimonialSlider.scrollLeft;
});

testimonialSlider.addEventListener('mouseleave', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mouseup', () => {
    isDown = false;
});

testimonialSlider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialSlider.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialSlider.scrollLeft = scrollLeft - walk;
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}! You'll receive 10% off your first order.`);
    newsletterForm.reset();
});

// Search Functionality
const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchBar.querySelector('input').value;
    alert(`Searching for: ${searchTerm}`);
    searchBar.reset();
});
