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
$(document).ready(function() {
  $('#contact-form').on('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    var formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      message: $('#message').val()
    };

    // Send the form data to Google Apps Script
    $.ajax({
      url: 'https://script.google.com/macros/library/d/1w6Aqfb45zZFZ_hI3fXDAUvKIhlLDG3u1mYODXN6s7PjtsbrF0mIncrv4/1', // Replace with your Web App URL
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(formData),
      success: function(response) {
        $('#response').html('<p>Thank you! Your message has been sent.</p>');
        $('#contact-form')[0].reset(); // Reset the form after submission
      },
      error: function() {
        $('#response').html('<p>Oops! There was an error. Please try again.</p>');
      }
    });
  });
});