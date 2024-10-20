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
function emailSend(){


	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;


	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email +
  "<br/> Message " + message;
	Email.send({
    SecureToken : "55247384-b560-4d76-80ea-aace923bd8d9",
    To : 'tymestech@gmail.com',
    From : "tymestech@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Sucess", "Message Sent", "success");
  	}
  	else{
  		swal("Error", "Failed, Unknown error", "error");
  	}
  }
);
}

/*Email.send({
  SecureToken : "7318f739-8c66-46ae-bb88-2a6a94d6df1d",
  To : 'tymestech@gmail.com',
  From : "tymestech@gmail.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(

message => alert(message)
);*/
//7318f739-8c66-46ae-bb88-2a6a94d6df1d
//passswpord= 356C23223ADC44CFC6F85C01B7EF1B11A82C
//username = tymestech@gmail.com
//host= smtp.elasticemail.com
//port= 2525