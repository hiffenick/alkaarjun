
  const toggleBtn = document.getElementById('toggle-theme');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
  });

  // Hamburger Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.main-nav ul');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('show');
  });