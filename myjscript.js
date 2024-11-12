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
  

  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');
  
  navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active'); // Toggles the 'active' class to show/hide navbar links
  });
