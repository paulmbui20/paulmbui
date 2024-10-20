const mobileMenu = document.getElementById("mobile-menu");
const menuItems = document.getElementById("menu-items");

mobileMenu.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
}
function sendToWhatsapp(){
	let number = "+254746544646";
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
	let message = document.getElementById('message').value;
	var url = "https://wa.me/" + number + "?text="
	+ "Hello I'm " +name+ "%0a"
	+ "My Email is " +email+ "%0a"
  + "My Phone is " +phone+ "%0a"
	+ "and my Message is " +message+ "%0a%0a";
	window.open(url, '_blank').focus();
}