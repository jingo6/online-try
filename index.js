window.onload = function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
  }

function sendEmail(){
Email.send({
    SecureToken: "c9462567-5507-472d-a434-880f005e2788 ",
    To : 'jivan.jingo@gmail.com',
    From : document.getElementsByID("email").value,
    Subject : "New contact form enquiry",
    Body : " this is body"
}).then(
  message => alert(message)
);
}
