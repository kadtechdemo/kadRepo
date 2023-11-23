	//index.js  
function sendEmail(from,sub, body) {//alert(from+"====>>"+sub+"===="+body)
	
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "mailsurajitin@yahoo.co.in",
	Password : "3F1D89FEC3DEBCFD65F10AA5F9970788E0AF",
	To : "mailsurajitin@yahoo.co.in",
	From : "mailsurajitin@gmail.com",
	Subject : sub,
	Body : body,
	}).then(
		message => alert("Thanks for contacting us . Mail has been sent to Kadtech Back office successfully.")
	);
}

function testCall(){
	alert()
}