// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress-bar div');
const animateProgressBars = () => {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      bar.style.width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
    }
  });
};

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// Form submission handling (basic example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Form submitted! (This is a demo alert)');
  this.reset();
});