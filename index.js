window.onload = function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
  }

function sendEmail(){
    Email.send({
        // SecureToken : "",

        Host : "smtp.elasticemail.com",
        Username : "admin@nepalonlineshoping.com",
        Password : "7E6573A6AF68E29E6F9864A7EFCFD4F14537",
        
        To : 'jivan.jingo@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body :        "Name: "+document.getElementById("name").value
                +"<br> Email: "+document.getElementById("email").value
                +"<br> Phone: "+document.getElementById("phone").value
                +"<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert(message)
    );

}
