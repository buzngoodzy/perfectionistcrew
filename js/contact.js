document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const service = document.getElementById('service');
    
    let isValid = true;
    
    // Reset previous error states
    [name, email, message, service].forEach(field => {
      field.style.borderColor = '';
    });
    
    // Validate required fields
    if (!name.value.trim()) {
      name.style.borderColor = 'red';
      isValid = false;
    }
    
    if (!email.value.trim() || !isValidEmail(email.value)) {
      email.style.borderColor = 'red';
      isValid = false;
    }
    
    if (!message.value.trim()) {
      message.style.borderColor = 'red';
      isValid = false;
    }
    
    if (!service.value) {
      service.style.borderColor = 'red';
      isValid = false;
    }
    
    if (!isValid) {
      alert('Please fill in all required fields correctly.');
      return;
    }
    
    // Here you would typically send the form data to your server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});