(function() {
    emailjs.init("JG95twLTVTAz-JU36");
  })();
  
  function sendMail() {
    const parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("service_7izh5mg", "template_uk0fuvh", parms)
      .then(() => {
        alert("Email Sent!");
        document.getElementById("contact-form").reset();
      })
      .catch(error => {
        console.error("Failed to send email:", error);
        document.getElementById("status-message").textContent = "Failed to send message. Please try again.";
      });
  }
  
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
  });

  function toggleMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const navbarLinks = document.querySelector('.navbar-links');

    if (menuIcon && navbarLinks) {
        menuIcon.classList.toggle('active');
        navbarLinks.classList.toggle('active');
    } else {
        console.error("Menu icon or navbar links not found.");
    }
}
