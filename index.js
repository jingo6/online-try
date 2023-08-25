window.onload = function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
  }

function sendEmail(){
         Email.send({
Email.send({
    SecureToken: "c90feba5-68f2-47de-9e42-54ae30850e42",
    To : 'jivan.jingo@gmail.com',
    From : document.getElementsByID("email").value,
    Subject : "New contact form enquiry",
    Body : " this is body"
}).then(
  message => alert(message)
);
}
