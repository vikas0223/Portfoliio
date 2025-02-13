
// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Scroll Animation Effects
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.skill-card, .project-card');
  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      if(elementTop < window.innerHeight && elementBottom > 0) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Add your form submission logic here
  const formData = new FormData(this);
  
  // Simple validation
  if(!formData.get('name') || !formData.get('email') || !formData.get('message')) {
      alert('Please fill in all fields');
      return;
  }
  
  // Simulate successful submission
  this.reset();
  alert('Thank you for your message! I will respond shortly.');
});

// Enhanced Typing Effect
new Typed('.typewrite', {
  strings: [
      "Hello, I'm Vikas Singh",
      "Creative Designer", 
      "Full-Stack Developer",
      "Tech Innovator",
      "UI/UX Specialist",
      "Problem Solver"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  smartBackspace: true,
  showCursor: true,
  fadeOut: false
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: ${getComputedStyle(document.documentElement).getPropertyValue('--accent-color')};
  z-index: 9999;
  transition: width 0.3s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

// Skill Card Hover Effect
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.transform = `
          translateY(-10px)
          rotateX(${(y - rect.height/2)/10}deg)
          rotateY(${(x - rect.width/2)/10}deg)
      `;
  });
  
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(-10px)';
  });
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: ${getComputedStyle(document.documentElement).getPropertyValue('--accent-color')};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.opacity = window.scrollY > 500 ? '1' : '0';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Parallax Effect for Header
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.header').style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Form Input Animation
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
  input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.02)';
  });
  
  input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
  });
});

particlesJS("particles-js", {
  particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 4 },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 4, direction: "none" }
  },
  interactivity: {
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
  }
});