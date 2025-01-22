// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  offset: 100,
  once: true
});

// Enhanced Testimonials with Animation
function initTestimonialSlider() {
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) return;

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Homeowner",
      text: "PerfectionistCrew transformed our dated bathroom into a modern spa-like retreat. Their attention to detail was impressive!",
      rating: 5,
      image: generateAvatarUrl("Sarah Thompson")
    },
    {
      name: "James Wilson",
      role: "Property Developer",
      text: "Professional, punctual, and perfect execution. Working with PerfectionistCrew has been a game-changer for our developments.",
      rating: 5,
      image: generateAvatarUrl("James Wilson")
    },
    {
      name: "Emily Parker",
      role: "Interior Designer",
      text: "Their craftsmanship and attention to detail is unmatched. They bring designs to life exactly as envisioned.",
      rating: 5,
      image: generateAvatarUrl("Emily Parker")
    }
  ];

  let currentSlide = 0;
  
  function createTestimonialElement(testimonial) {
    const slide = document.createElement('div');
    slide.classList.add('testimonial');
    slide.setAttribute('data-aos', 'fade-up');
    
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    slide.innerHTML = `
      <div class="testimonial-content">
        <div class="testimonial-image">
          <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
        </div>
        <blockquote>${testimonial.text}</blockquote>
        <div class="testimonial-meta">
          <strong>${testimonial.name}</strong>
          <span>${testimonial.role}</span>
          <div class="testimonial-rating">${stars}</div>
        </div>
      </div>
    `;
    
    return slide;
  }

  // Initialize slides
  testimonials.forEach(testimonial => {
    slider.appendChild(createTestimonialElement(testimonial));
  });

  // Auto-advance with smooth transitions
  setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, 5000);
}

// Live Chat Feature
function initLiveChat() {
  const chatWidget = document.createElement('div');
  chatWidget.classList.add('chat-widget');
  chatWidget.innerHTML = '<i class="fas fa-comments"></i>';
  
  chatWidget.addEventListener('click', () => {
    // Initialize chat interface
    const chatInterface = document.createElement('div');
    chatInterface.classList.add('chat-interface');
    // Add chat interface implementation
  });
  
  document.body.appendChild(chatWidget);
}

// Portfolio Gallery
function initPortfolioGallery() {
  const gallery = document.querySelector('.portfolio-grid');
  if (!gallery) return;

  const projects = [
    {
      title: "Modern Bathroom Renovation",
      category: "Bathroom",
      image: generateProjectImage("bathroom-1"),
      description: "Complete bathroom transformation with luxury fixtures"
    },
    // Add more projects...
  ];

  projects.forEach(project => {
    const item = document.createElement('div');
    item.classList.add('portfolio-item');
    item.setAttribute('data-aos', 'fade-up');
    
    item.innerHTML = `
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="portfolio-overlay">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;
    
    gallery.appendChild(item);
  });
}

// Helper function to generate placeholder avatars
function generateAvatarUrl(name) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
}

// Helper function to generate project images (placeholder)
function generateProjectImage(id) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23dfe6e9'/%3E%3C/svg%3E`;
}

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
}

// Enhanced Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);

    try {
      // Here you would typically send the form data to your server
      console.log('Form submitted:', formObject);

      // Show success message
      const successMessage = document.createElement('div');
      successMessage.classList.add('form-success');
      successMessage.textContent = 'Thank you! We will contact you soon.';
      form.appendChild(successMessage);

      // Reset form
      form.reset();

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTestimonialSlider();
  initScrollAnimations();
  initContactForm();
  initLiveChat();
  initPortfolioGallery();
});
