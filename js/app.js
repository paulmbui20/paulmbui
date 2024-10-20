const mobileMenu = document.getElementById('mobile-menu');
  const menuItems = document.getElementById('menu-items');

  mobileMenu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
  });

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
}