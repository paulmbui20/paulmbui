const mobileMenu = document.getElementById('mobile-menu');
  const menuItems = document.getElementById('menu-items');

  mobileMenu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
  });

