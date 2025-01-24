document.addEventListener('DOMContentLoaded', () => {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter gallery items
      const filter = button.getAttribute('data-filter');
      
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Modal functionality
  const modal = document.querySelector('.modal');
  const modalImg = modal.querySelector('img');
  const modalClose = modal.querySelector('.modal-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').src;
      const imgAlt = item.querySelector('img').alt;
      modalImg.src = imgSrc;
      modalImg.alt = imgAlt;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});