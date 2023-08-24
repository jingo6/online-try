window.onload = function(){
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
  };
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
