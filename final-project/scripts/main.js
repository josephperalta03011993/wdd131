// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
    document.querySelector('#theme-toggle').textContent = mode === 'dark' ? 'Light Mode' : 'Dark Mode';
  }
  
  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('#theme-toggle').textContent = 'Light Mode';
  } else {
    document.querySelector('#theme-toggle').textContent = 'Dark Mode';
  }
  
  // Event listener for theme toggle
  document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);
  
  // Hamburger menu toggle function
  function toggleNav() {
    const nav = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  }
  
  // Event listener for hamburger menu
  document.querySelector('.hamburger').addEventListener('click', toggleNav);
  
  // Dynamically set active menu item
  function setActiveMenuItem() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
  
  // Execute active menu item setting
  setActiveMenuItem();
  
  // Gallery data (array of objects)
  const images = [
    { src: 'route1.webp', alt: 'Mountain trail', caption: 'Epic ride in the Rockies' },
    { src: 'gear.webp', alt: 'Biking gear', caption: 'My go-to trail setup' },
    { src: 'bike-maintenance.webp', alt: 'Bike chain cleaning', caption: 'Keeping the drivetrain smooth' },
    { src: 'trail2.webp', alt: 'Forest trail', caption: 'Evening ride through pines' }
  ];
  
  // Function to render gallery
  function renderGallery(images) {
    const gallery = document.querySelector('.gallery-grid');
    if (gallery) {
      gallery.innerHTML = images.map(img => `
        <figure>
          <img src="assets/${img.src}" alt="${img.alt}" loading="lazy">
          <figcaption>${img.caption}</figcaption>
        </figure>
      `).join('');
    }
  }
  
  // Execute gallery rendering
  renderGallery(images);
  
  // Contact form handling
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      localStorage.setItem('contactForm', JSON.stringify(data));
      alert('Thanks for your message! Data saved locally.');
      contactForm.reset();
    });
  }
  
  // Newsletter form handling
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(newsletterForm);
      const data = Object.fromEntries(formData);
      localStorage.setItem('newsletterEmail', JSON.stringify(data));
      alert('Thank you for signing up! Email saved locally.');
      newsletterForm.reset();
    });
  }
  
  // Footer dynamic content
  document.querySelector('#currentyear').textContent = new Date().getFullYear();
  document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;